package com.anonymous.vpn;

import static com.wireguard.android.backend.Tunnel.State.DOWN;
import static com.wireguard.android.backend.Tunnel.State.UP;

import android.content.Intent;
import android.os.AsyncTask;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.wireguard.android.backend.Backend;
import com.wireguard.android.backend.GoBackend;
import com.wireguard.android.backend.Tunnel;
import com.wireguard.config.Config;
import com.wireguard.config.InetEndpoint;
import com.wireguard.config.InetNetwork;
import com.wireguard.config.Interface;
import com.wireguard.config.Peer;

public class Wireguard extends ReactContextBaseJavaModule  {
    Backend backend;

    @NonNull
    @Override
    public String getName() {
        return "Wireguard";
    }
    Wireguard(ReactApplicationContext context) {
        super(context);

    }

    @ReactMethod
    public void getStatus(Callback callback){
        Boolean status = false;
        try{
            if (backend.getState(PersistentConnectionProperties.getInstance().getTunnel()) == UP) {
                status = true;
            }
        }catch(Exception e){
            status = false;
        }
        callback.invoke(status);
    }

    @ReactMethod
    public void connect(Callback callback) {
        backend = PersistentConnectionProperties.getInstance().getBackend();
        Tunnel tunnel = PersistentConnectionProperties.getInstance().getTunnel();
        Interface.Builder interfaceBuilder = new Interface.Builder();
        Peer.Builder peerBuilder = new Peer.Builder();
        TunnelModel tunnelModel = DataSource.getTunnelModel();

        AsyncTask.execute(new Runnable() {
            @Override
            public void run() {
                Tunnel.State currentState;
                Boolean isSuccess = false;
                try {
                    if (backend.getState(PersistentConnectionProperties.getInstance().getTunnel()) == UP) {
                        currentState = backend.setState(tunnel, DOWN, null);
                        isSuccess = (currentState == DOWN);
                    } else {
                        currentState = backend.setState(tunnel, UP, new Config.Builder()
                                .setInterface(interfaceBuilder.addAddress(InetNetwork.parse(tunnelModel.IP)).parsePrivateKey(tunnelModel.privateKey).build())
                                .addPeer(peerBuilder.addAllowedIp(InetNetwork.parse(tunnelModel.allowedIP)).setEndpoint(InetEndpoint.parse(tunnelModel.endpoint)).parsePublicKey(tunnelModel.publicKey).build())
                                .build());
                        isSuccess = (currentState == UP);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
                callback.invoke(isSuccess);
            }
        });
    }




}
