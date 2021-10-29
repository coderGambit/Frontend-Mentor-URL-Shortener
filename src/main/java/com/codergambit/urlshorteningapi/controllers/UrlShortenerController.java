package com.codergambit.urlshorteningapi.controllers;


import com.codergambit.urlshorteningapi.services.UrlShortenerService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UrlShortenerController{

	@PostMapping("/shortenLink")
	public String shortenLink(@RequestBody String url){
		return UrlShortenerService.getShortLink(url);
	}
}
