package com.rnsamplemodule;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.provider.Settings.Secure;
import com.facebook.react.bridge.Promise;

public class RnSampleModule extends ReactContextBaseJavaModule {
  @Override
  public String getName() {
    return "RnSampleModule";
  }

  RnSampleModule(ReactApplicationContext context) {
    super(context);
  }

  @ReactMethod
  public void getDeviceId(Promise promise) {
    promise.resolve(Secure.getString(getReactApplicationContext().getContentResolver(), Secure.ANDROID_ID));
  }
}
