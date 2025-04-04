package com.biometricsmodule

import com.facebook.react.BaseReactPackage
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.common.annotations.UnstableReactNativeAPI
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider
import java.util.HashMap

class BiometricsModulePackage : BaseReactPackage(), ReactPackage {

  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
    return listOf(BiometricsModuleModule(reactContext)) // Fallback nếu Legacy Architecture
  }

  @UnstableReactNativeAPI
  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
    return if (name == BiometricsModuleModule.NAME) {
      BiometricsModuleModule(reactContext)
    } else {
      null
    }
  }

  override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
    return ReactModuleInfoProvider {
      val moduleInfos: MutableMap<String, ReactModuleInfo> = HashMap()
      moduleInfos[BiometricsModuleModule.NAME] = ReactModuleInfo(
        BiometricsModuleModule.NAME,
        BiometricsModuleModule.NAME,
        false,  // canOverrideExistingModule
        false,  // needsEagerInit
        false,  // isCxxModule
        true // isTurboModule
      )
      moduleInfos
    }
  }
}
