import { useQuery } from '@tanstack/react-query';

import { flowStructureUtil, FlowVersion } from '@activeboxes/shared';

import { sampleDataApi } from './sample-data-api';

const getSampleData = async (flowVersion: FlowVersion, stepName: string) => {
  try {
    return await sampleDataApi.get({
      flowId: flowVersion!.flowId,
      flowVersionId: flowVersion!.id,
      stepName: stepName,
    });
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
export const sampleDataHooks = {
  useSampleDataForFlow: (flowVersion: FlowVersion | undefined) => {
    return useQuery({
      queryKey: ['sampleData', flowVersion?.id],
      enabled: !!flowVersion,
      staleTime: 0,
      retry: 4,
      refetchOnWindowFocus: false,
      queryFn: async () => {
        const steps = flowStructureUtil.getAllSteps(flowVersion!.trigger);
        const singleStepSampleData = await Promise.all(
          steps.map(async (step) => {
            return {
              [step.name]: await getSampleData(flowVersion!, step.name),
            };
          }),
        );
        const sampleData: Record<string, unknown> = {};
        singleStepSampleData.forEach((stepData) => {
          Object.assign(sampleData, stepData);
        });
        return sampleData;
      },
    });
  },
};
