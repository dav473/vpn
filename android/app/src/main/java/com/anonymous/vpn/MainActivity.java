package com.anonymous.vpn;

import static com.wireguard.android.backend.Tunnel.State.UP;

import android.content.Intent;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import com.wireguard.android.backend.Backend;
import com.wireguard.android.backend.GoBackend;
import com.wireguard.android.backend.Tunnel;
import com.wireguard.config.Config;
import com.wireguard.config.InetEndpoint;
import com.wireguard.config.InetNetwork;
import com.wireguard.config.Interface;
import com.wireguard.config.Peer;

import expo.modules.ReactActivityDelegateWrapper;

public class MainActivity extends ReactActivity {
  Backend backend;
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // Set the theme to AppTheme BEFORE onCreate to support 
    // coloring the background, status bar, and navigation bar.
    // This is required for expo-splash-screen.
    try {
      backend.getRunningTunnelNames();
    }
    catch (NullPointerException e) {
      PersistentConnectionProperties.getInstance().setBackend(new GoBackend(this));
      backend = PersistentConnectionProperties.getInstance().getBackend();
    }
    setTheme(R.style.AppTheme);
    super.onCreate(null);
  }

  /**
   * Returns the name of the main component registered from JavaScript.
   * This is used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "main";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegateWrapper(this, BuildConfig.IS_NEW_ARCHITECTURE_ENABLED, new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled()));
  }

  /**
   * Align the back button behavior with Android S
   * where moving root activities to background instead of finishing activities.
   * @see <a href="https://developer.android.com/reference/android/app/Activity#onBackPressed()">onBackPressed</a>
   */
  @Override
  public void invokeDefaultOnBackPressed() {
    if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
      if (!moveTaskToBack(false)) {
        // For non-root activities, use the default implementation to finish them.
        super.invokeDefaultOnBackPressed();
      }
      return;
    }

    // Use the default back button implementation on Android S
    // because it's doing more than {@link Activity#moveTaskToBack} in fact.
    super.invokeDefaultOnBackPressed();
  }
  @ReactMethod
  public void connect() {
    Tunnel tunnel = new WgTunnel();
    Intent intentPrepare = GoBackend.VpnService.prepare(this);
    if(intentPrepare != null) {
      startActivityForResult(intentPrepare, 0);
    }
    Interface.Builder interfaceBuilder = new Interface.Builder();
    Peer.Builder peerBuilder = new Peer.Builder();
    Backend backend = new GoBackend(this);

    AsyncTask.execute(new Runnable() {
      @Override
      public void run() {
        try {
          backend.setState(tunnel, UP, new Config.Builder()
                  .setInterface(interfaceBuilder.addAddress(InetNetwork.parse("192.168.6.208/32")).parsePrivateKey("GBFfc1EShy0q2XMlzugR+G9nSFkN3ZCu/+7qFsM9MHs=").build())
                  .addPeer(peerBuilder.addAllowedIp(InetNetwork.parse("0.0.0.0/0")).setEndpoint(InetEndpoint.parse("jp2.vpnjantit.com:1024")).parsePublicKey("dTabWXo0B07A5rXnbyW3AiY/SlfZy8JCKwhf3ZoYjx0=").build())
                  .build());

        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    });
  }
}
