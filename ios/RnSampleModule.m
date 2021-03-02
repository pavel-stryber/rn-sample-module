#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RnSampleModule, NSObject)

RCT_EXTERN_METHOD(getDeviceId: (RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

@end
