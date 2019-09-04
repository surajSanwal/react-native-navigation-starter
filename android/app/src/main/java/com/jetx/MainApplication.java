package com.jetx;

import android.app.Application;
import android.util.Log;

import androidx.annotation.Nullable;

import com.facebook.react.PackageList;
import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.ReactApplication;
import org.wonday.pdf.RCTPdfView;
import com.RNFetchBlob.RNFetchBlobPackage;
import io.github.elyx0.reactnativedocumentpicker.DocumentPickerPackage;
import com.rnfs.RNFSPackage;
import com.agontuk.RNFusedLocation.RNFusedLocationPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.airbnb.android.react.maps.MapsPackage;
import com.agontuk.RNFusedLocation.RNFusedLocationPackage;

import java.util.Arrays;
import java.util.List;


public class MainApplication extends NavigationApplication {

    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost
                host = new NavigationReactNativeHost(this) {
            @Override
            protected String getJSMainModuleName() {
                return "index";

            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;

    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
                new VectorIconsPackage(),
                new NetInfoPackage(),
                new AsyncStoragePackage(),
                new RNCWebViewPackage(),
                new RNSpinkitPackage(),
                new MapsPackage(),
                new RNFusedLocationPackage(),
                new RNFSPackage(),
                new DocumentPickerPackage(),
                new RNFetchBlobPackage(),
                new RCTPdfView()
        );

    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();

    }

}
