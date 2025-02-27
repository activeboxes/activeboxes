# ActiveBoxes

Fully open-source fork of [Activepieces](https://github.com/activepieces/activepieces) with no enterprise editon code!


## Features

- All enterprise edition code has been removed.
- Telemetry has been completely removed.
- Polyfills of EE interfaces necessary to build the application were created based on tests, DB migrations and/or code usage (clean-room engineering - no EE code peeking).
- SSL certificate validation has been universally enabled (i.e. in HTTP and IMAP components).
- Pieces can be loaded directly from NPM Registry.


## Migration

To migrate from Activepieces, we recommend creating a clean installation and:

- exporting the flows as text,
- replacing "activepieces/" with "activeboxes/",
- setting the component version to the latest available,
- importing the flow to ActiveBoxes.


## Plans

- Remove the dependency on external services for icons and pieces metadata.
- Make version check optional.


## Help wanted!

If you have an improvement, just create a pull request!
