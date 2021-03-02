import UIKit;

@objc(RnSampleModule)
class RnSampleModule: NSObject {

    @objc(getDeviceId:withRejecter:)
    func getDeviceId(resolve: RCTPromiseResolveBlock,
                     reject:RCTPromiseRejectBlock) -> Void {
        let id = UIDevice.current.identifierForVendor?.uuidString
        resolve(id);
    }
}
