package com.anonymous.vpn;

public class TunnelDecoder {

    public static TunnelModel decode(String jsonString) {
//        Gson gson = new Gson();
//        JsonObject json = gson.fromJson(jsonString, JsonObject.class);

        TunnelModel model = new TunnelModel();
        model.privateKey = "OHRYCup7Y5niA47P+2XxO+MmvaRVNGJatAvhmA5h1mk=";
        model.IP = "192.168.6.71";
        model.dns = "8.8.8.8";
        model.endpoint = "jp2.vpnjantit.com:1024";
        model.allowedIP = "0.0.0.0/0";
        model.publicKey = "dTabWXo0B07A5rXnbyW3AiY/SlfZy8JCKwhf3ZoYjx0=";
        model.url = "NA";

        return model;
    }

}