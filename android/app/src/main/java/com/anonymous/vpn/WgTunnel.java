package com.anonymous.vpn;

import com.wireguard.android.backend.Tunnel;

public class WgTunnel implements Tunnel {
    @Override
    public String getName() {
        return "wgpreconf";
    }

    @Override
    public void onStateChange(State newState) {
    }
}