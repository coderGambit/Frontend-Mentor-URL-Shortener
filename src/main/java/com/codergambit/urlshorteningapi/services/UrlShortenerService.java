package com.codergambit.urlshorteningapi.services;


import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


@Service
public class UrlShortenerService{

	private static final String API_BASE = "https://api.shrtco.de/v2/shorten?";

	public static String getShortLink(String url){
		WebClient client = WebClient.create(API_BASE + "url=" + url);
		return client.get().retrieve().bodyToMono(String.class).block();
	}
}
