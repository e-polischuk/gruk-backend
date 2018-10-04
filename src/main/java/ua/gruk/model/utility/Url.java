package ua.gruk.model.utility;

import java.io.UnsupportedEncodingException;
import java.net.*;
import java.util.*;

/**
 * Any URL is considered as @baseUrl and optional set of @params 
 * which (if they exists) are concatenated to baseUrl, starting 
 * with char '?'. Each key(name) of @params has to be unique!
 * URL representation example(format):
 * http://www.example.com/context?key1=value1&key2=value2
 *  
 * This mutable class provides simple, useful and safe API
 * for URL parsing, comparison, representing and interactive
 * handling of any parts - @baseUrl or @params.
 * It handles in a proper way as decoded as encoded URL-strings 
 * (representation of URL-string doesn't matter), as this class 
 * also has two corresponding methods. Also an parameters order
 * of parsed URL-string doesn't matter for this class.
 *  
 * Additionally, can be run main method which includes some 
 * basic tests for this class. Also you could add your tests 
 * there and if you will find any bugs or have suggestions 
 * for improvement, from a user viewpoint - you are welcome 
 * to @epolischuk in Telegram.
 * 
 * Put this source in the project and don't forget to change
 * the package name.
 * 
 * @author https://github.com/e-polischuk
 *
 */
public class Url {
	/**
	 * A first part of URL, it's sub parts are joined by '/'
	 * and it ends before starting of parameters - char '?'.
	 * Example of @baseUrl - http://www.example.com/context
	 */
	private String baseUrl = "";
	/**
	 * String-representation of @params starts with '?' and 
	 * all param-pairs (key=value) are joined by '&'.
	 * For example - ?key1=value1&key2=value2
	 * All URL parameters are hold in an origin order. But 
	 * from a viewpoint of the Url-essence the @params order 
	 * doesn't matter, so methods equals() and hashCode() 
	 * account this by @params sorting. Therefore Url-class 
	 * has a single-valued understanding of URL regardless 
	 * it's representation (@params can be in any order).
	 */
	private final Map<String, String> params = new LinkedHashMap<>();
	
	/**
	 * From a viewpoint of safe API, instantiation by operator new is 
	 * denied and instead is provided a static  method - @of(String...).
	 */
	private Url() {}
	
	/**
	 * An instantiation method instead of constructor.
	 * @param url - an optional flexible parameter can be used as:
	 * 		1) without - @of() returns an object with empty baseUrl and params;
	 * 		2) one param - @of(url) where url means a string representation of
	 * 			any full URL, which can be decode or encode, with or without
	 * 			params whose order doesn't matter;
	 * 		3) two or more params - @of(parts, of, baseUrl) will construct just
	 * 			baseUrl by join all inputed parameters with '/'.
	 * @return an instance of this class that is initialized already.
	 */
	public static Url of(String...url) {
		Url parsed = new Url();
		if (url.length == 1) {
			String[] separ = decode(url[0]).split("\\?");
			if (separ.length > 0 ) parsed.setBaseUrl(separ[0]);
			if (separ.length > 1) 
				for (String p: separ[1].split("&")) {
					int i = p.indexOf("=");
					int j = i < 0 ? p.length() - 1 : i + 1;
					parsed.setParam(i < 0 ? p : p.substring(0, i), j < 0 ? "" : p.substring(j));
				}
		} else if (url.length > 1) parsed.setBaseUrl(url);
		return parsed;
	}
	
	public String getBaseUrl() {
		return this.baseUrl;
	}
	
	public String getParam(String key) {
		return this.params.get(key);
	}
	
	public Map<String, String> getParams() {
		return this.params;
	}
	
	public Url setBaseUrl(String...baseUrl) {
		StringBuilder sb = new StringBuilder();
		int i = baseUrl.length;
		for (String part : baseUrl) sb.append(decode(part)).append(--i > 0 ? '/' : "");
		this.baseUrl = sb.toString();
		return this;
	}
	
	public Url setParam(String key, String value) {
		this.params.put(key, value);
		return this;
	}
	
	public Url setParams(Map<String, String> params) {
		if (params != null && params.size() > 0) this.params.putAll(params);
		return this;
	}
	
	public Url removeParam(String key) {
		this.params.remove(key);
		return this;
	}
	
	public Url removeAllParams() {
		this.params.clear();
		return this;
	}
	
	public String paramsToString(boolean...isEncode) {
		StringBuilder sb = new StringBuilder();
		for (String key : params.keySet()) sb.append(sb.length() > 0 ? '&' : '?')
			.append(isEncode.length > 0 && isEncode[0] ? encode(key) : key)
			.append(key.trim().isEmpty() ? "" : '=')
			.append(isEncode.length > 0 && isEncode[0] ? encode(getParam(key)) : getParam(key));
		return sb.toString();
	}
	
	@Override
	public int hashCode() {
		int result = 1;
		result = 31 * result + baseUrl.hashCode();
		result = 31 * result + new TreeMap<>(params).hashCode();
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (obj == null || !(obj instanceof Url) || obj.getClass() != getClass()) return false;
		Url o = (Url) obj;
		return this == o || (baseUrl.equals(o.baseUrl) && new TreeMap<>(params).equals(new TreeMap<>(o.params)));
	}

	@Override
	public String toString() {
		return baseUrl.concat(paramsToString());
	}
	
	public String toEncodeString(boolean...all) {
		return all.length > 0 && all[0] ? encode(toString()) : baseUrl.concat(paramsToString(true));
	}

	public static String decode(String url) {
		try {
			String decodeUrl = url == null ? url : URLDecoder.decode(url, "UTF-8");
			return url == null || url.equals(decodeUrl) ? decodeUrl : decode(decodeUrl);
		} catch (UnsupportedEncodingException e) {
			return null;
		}
	}
	
	public static String encode(String url) {
		try {
			return URLEncoder.encode(url, "UTF-8");
		} catch (UnsupportedEncodingException e) {
			return null;
		}
	}

	// Use example and testing of Url API:
	public static void main(String[] args) {
		String host = "https://example.com";
		String context = "context";
		System.out.println(Url.of(host, context, "json"));
		Map<String, String> params = new HashMap<>();
		for (int i = 0; i < 4; i++) params.put("key:" + i, "value:" + i);
		
		System.out.println("\n1) USE EXAMPLE:");
		String urlRepresentation = Url.of(host, context).setParams(params).toEncodeString();
		System.out.println("Url representations before change:");
		System.out.println(urlRepresentation);
		System.out.println(Url.decode(urlRepresentation));
		Url modifiedUrl = Url.of(urlRepresentation).setBaseUrl(host, "between", context)
								.removeParam("key0")
								.setParam("key1", "YES or NO_!")
								.setParam("key2", " D: test");
		System.out.println("Representations of modified url:");
		System.out.println(modifiedUrl);
		System.out.println(modifiedUrl.toEncodeString());
		System.out.println(modifiedUrl.toEncodeString(true));
		
		System.out.println("\n2) Test for encode/decode methods:");
		// Mixed - partly encode and partly decode string:
		String encode ="https%3A%2F%2Fr1---sn-ci5gup-cags.googlevideo.com%2Fvideoplayback%3Fpcm2cms%3Dyes%26mime%3Dvideo%252Fmp4%26pl%3D21%26itaga%3D22%26\u0026itag=43\u0026type=video%2Fwebm%3B+codecs%3D%22vp8.0%2C+vorbis%22\u0026quality=medium";
		
		// Fully encode string:
//		String encode = "https%3A%2F%2Fr1---sn-ci5gup-cags.googlevideo.com%2Fvideoplayback%3Fpcm2cms%3Dyes%26mime%3Dvideo%2Fmp4%26pl%3D21%26itaga%3D22%26%26itag%3D43%26type%3Dvideo%2Fwebm%3B+codecs%3D%22vp8.0%2C+vorbis%22%26quality%3Dmedium";
		
		//Fully decode string:
		String decode ="https://r1---sn-ci5gup-cags.googlevideo.com/videoplayback?pcm2cms=yes&mime=video/mp4&pl=21&itaga=22&&itag=43&type=video/webm; codecs=\"vp8.0, vorbis\"&quality=medium";  
        
		System.out.println("decode: " + decode);
		System.out.println("decode(encode)): " + decode(encode));
		System.out.println("CHECK_1: " + decode.equals(decode(encode))); // for mixed and encode - TRUE
		
		System.out.println("encode: " + encode);
		System.out.println("encode(decode)): " + encode(decode));
		System.out.println("CHECK_2: " + encode.equals(encode(decode))); // FALSE for mixed and TRUE for fully encode string 
		
		System.out.println("encode(decode(encode)): " + encode);
		System.out.println("encode(decode)): " + encode(decode));
		System.out.println("CHECK_3: " + encode(decode(encode)).equals(encode(decode))); // for mixed and encode - TRUE
		
		System.out.println("\n3) Test of static fabric method for create URL objects:");
		Url fromEncode = Url.of(encode);
		Url fromDecode = Url.of(decode);
		System.out.println("From Encode: " + fromEncode);
		System.out.println("From Decode: " + fromDecode);
		System.out.println("fromEncode.equals(fromDecode)): " + fromEncode.equals(fromDecode));
		System.out.println("fromEncode.hashCode()==fromDecode.hashCode(): " + (fromEncode.hashCode() == fromDecode.hashCode()));
		
		System.out.println("\n4) Test for interactive changing of URL-parameters:");
		fromEncode.setParam("pcm2cms", "NO");
		fromDecode.removeParam("pcm2cms");
		System.out.println("From Encode: " + fromEncode);
		System.out.println("From Decode: " + fromDecode);
		System.out.println("fromEncode.equals(fromDecode)): " + fromEncode.equals(fromDecode));
		System.out.println("fromEncode.hashCode()==fromDecode.hashCode(): " + (fromEncode.hashCode() == fromDecode.hashCode()));
		System.out.println(Url.of(fromDecode.paramsToString(true)));
		
		System.out.println("\n5) Test for removing and adding of URL-parameters:");
		fromEncode.removeAllParams();
		System.out.println("removeAllParams: " + fromEncode);
		fromEncode.setParam("KEY", "CHANGED_PARAM");
		System.out.println("setParam: " + fromEncode);
		fromEncode.setParams(params);
		System.out.println("setParams: " + fromEncode);
		
		System.out.println("\n6) Test for equals and hashCode methods:");
		Url testEqAndHash = Url.of(fromEncode.toString());
		testEqAndHash.setParam("KEY", "NEW");
		System.out.println("testEqAndHash.setParam - KEY: " + testEqAndHash);
		System.out.println("fromEncode.equals(testEqAndHash)): " + fromEncode.equals(testEqAndHash));
		System.out.println("fromEncode.hashCode()==testEqAndHash.hashCode(): " + (fromEncode.hashCode() == testEqAndHash.hashCode()));
		System.out.println("testEqAndHash: " + testEqAndHash);
		testEqAndHash.removeParam("KEY");
		System.out.println("testEqAndHash.removeParam - KEY: " + testEqAndHash);
		testEqAndHash.setParam("KEY", "CHANGED_PARAM");
		System.out.println("testEqAndHash.setParam - KEY: " + testEqAndHash);
		System.out.println("fromEncode.equals(testEqAndHash)): " + fromEncode.equals(testEqAndHash));
		System.out.println("fromEncode.hashCode()==testEqAndHash.hashCode(): " + (fromEncode.hashCode() == testEqAndHash.hashCode()));
		
		System.out.println("\n7) Analyse toEncodeString() method:");
		System.out.println(fromDecode.toEncodeString());
		System.out.println(fromDecode.toEncodeString(true));
		System.out.println(": - " + encode(":"));
		System.out.println("/ - " + encode("/"));
		System.out.println("& - " + encode("&"));
		System.out.println("= - " + encode("="));
		System.out.println("? - " + encode("?"));
	}
	
}
