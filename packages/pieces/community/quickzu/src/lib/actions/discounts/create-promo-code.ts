import {
  DynamicPropsValue,
  Property,
  createAction,
} from '@activeboxes/pieces-framework';
import { quickzuAuth } from '../../..';
import { makeClient } from '../../common';
import {
  DiscountFilterType,
  DiscountMethod,
  DiscountValueType,
} from '../../common/constants';
import { ProductDiscountInput } from '../../common/types';

export const createPromoCodeAction = createAction({
  auth: quickzuAuth,
  name: 'quickzu_create_promo_code',
  displayName: 'Create Promo/Coupon Code',
  description: 'Creates a new promo code for category or product level.',
  props: {
    title: Property.ShortText({
      displayName: 'Promotion / Discount Title',
      required: true,
    }),
    start_date: Property.DateTime({
      displayName: 'Valid From',
      description: 'Please use YYYY-MM-DD format.',
      required: true,
    }),
    end_date: Property.DateTime({
      displayName: 'Valid To',
      description: 'Please use YYYY-MM-DD format.',
      required: true,
    }),
    filter_type: Property.StaticDropdown({
      displayName: 'Filter',
      description: 'Choose what gets discount (products/categories).',
      required: true,
      options: {
        disabled: false,
        options: Object.values(DiscountFilterType).map((value) => {
          return {
            label: value.toLowerCase(),
            value: value,
          };
        }),
      },
    }),
    selectedFilterValues: Property.DynamicProperties({
      displayName: 'Select Option',
      refreshers: ['filter_type'],
      required: true,
      props: async ({ auth, filter_type }) => {
        if (!auth) return {};
        if (!filter_type) return {};

        const fields: DynamicPropsValue = {};
        const discountFilterType = filter_type as unknown as DiscountFilterType;

        const client = makeClient(auth as unknown as string);

        switch (discountFilterType) {
          case DiscountFilterType.CATEGORIES: {
            const res = await client.listCategories();
            fields['values'] = Property.StaticMultiSelectDropdown({
              displayName: 'Categories',
              required: true,
              description: 'Categories eligible for a discount.',
              options: {
                disabled: false,
                options: res.data.map((category) => {
                  return {
                    label: category.name,
                    value: category._id,
                  };
                }),
              },
            });
            break;
          }
          case DiscountFilterType.PRODUCTS: {
            const res = await client.listProducts();
            fields['values'] = Property.StaticMultiSelectDropdown({
              displayName: 'Products',
              required: true,
              description: 'Products eligible for a discount.',
              options: {
                disabled: false,
                options: res.data.map((product) => {
                  return {
                    label: product.name,
                    value: product._id,
                  };
                }),
              },
            });
            break;
          }
          case DiscountFilterType.ALL_PRODUCTS: {
            fields['values'] = [];
            break;
          }
        }
        return fields;
      },
    }),
    promo_code: Property.ShortText({
      displayName: 'Promo Code',
      required: true,
    }),
    minimum_cart_value: Property.Number({
      displayName: 'Minimum Order Amount',
      required: true,
    }),
    max_users_limit: Property.Number({
      displayName: 'Maximum Promo Code Limit',
      required: true,
    }),
    type: Property.StaticDropdown({
      displayName: 'Discount',
      required: true,
      options: {
        disabled: false,
        options: Object.values(DiscountValueType)
          .filter((value) => value !== DiscountValueType.FIXED_PRICE)
          .map((value) => {
            return {
              label: value.toLowerCase(),
              value: value,
            };
          }),
      },
    }),
    value: Property.ShortText({
      displayName: 'Discount Value',
      required: true,
    }),
    is_enabled: Property.Checkbox({
      displayName: 'Enabled ?',
      required: true,
      defaultValue: true,
    }),
    is_visible: Property.Checkbox({
      displayName: 'Visibility',
      required: true,
      defaultValue: true,
    }),
  },
  async run(context) {
    const {
      title,
      start_date,
      end_date,
      filter_type,
      selectedFilterValues,
      type,
      promo_code,
      max_users_limit,
      minimum_cart_value,
      value,
      is_enabled,
      is_visible,
    } = context.propsValue;

    const input: ProductDiscountInput = {
      discount_method: DiscountMethod.SUB_TOTAL,
      title,
      start_date,
      end_date,
      filter_type,
      max_users_limit,
      minimum_cart_value,
      promo_code,
      type,
      value,
      is_enabled,
      is_visible,
    };
    if (filter_type === DiscountFilterType.CATEGORIES) {
      input.selectedCategories = selectedFilterValues['values'];
    } else if (filter_type === DiscountFilterType.PRODUCTS) {
      input.selectedProducts = selectedFilterValues['values'];
    }

    const client = makeClient(context.auth);
    return await client.createProductDiscount(input);
  },
});
