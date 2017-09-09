package ua.gruk.model.utility;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.math.MathContext;
import java.math.RoundingMode;

/**
 * <p>An immutable class encapsulates a pair of any TWO UNEQUAL POSITIVE (more than zero)
 * {@code long} numbers (lessId, moreId) and an UNIQUE String value (key) that represents 
 * this pair. The author applied own algorithms for the key generation and back conversion 
 * to the pair.
 * <p>Available two constructors to create the instance as by ids as by key. Also provided 
 * synchronized static methods to generate just the key by two ids or vice versa.
 * <p>Serialization of this class is executed by the proxy agent {@code SerializationProxy}
 * that guarantees safe serialization/deserialization process with immutability support.
 * The class is comparable by its key converted to the {@code BigInteger} number.</p>
 * 
 * <p> FOR CHECKERS: can run this class as JavaApplication to watch tests for multithreaded
 * instantiation and interfaces implementation! Unless your console supports print in color
 * then manually set 'isColorSupport=false' on first line of this main method and rerun.</p>
 * 
 * @author Evgen Polischuk
 */
public final class PairKey implements Serializable, Comparable<PairKey> {
    /** For the serialization system needs. */
    private static final long serialVersionUID = 1315743493652053728L;

    /** The radix for conversion of the {@code BigInteger} decimal number to and from the key.*/
    public static final int RADIX = Character.MAX_RADIX;
    
    /**
     * This {@code BigInteger} number corresponds with a pair of 
     * {@code Long.MAX_VALUE-1} and {@code Long.MAX_VALUE}, so 
     * any key converted to {@code BigInteger} number that is higher
     * than MAX_KEY would be out of the {@code long} range.  
     */
    public static final BigInteger MAX_KEY = 
	    new BigInteger("42535295865117307919086767873688862721");
    
    /**
     * An unique String representation of the BigInteger number in the {@link #RADIX},
     * that represents a pair of {@link #lessId} and {@link #moreId}.
     */
    private final String key;
    
    /**
     * The encapsulated pair:
     * lessId is lesser id of the pair from range [1, {@code Long.MAX_VALUE-1}];
     * moreId is higher id of the pair from range [2, {@code Long.MAX_VALUE}]
     */
    private final long lessId, moreId;
    
    
    /**
     * An instance by the known pair of IDs (see detail for exception).
     * 
     * @param id1 any number from the range [1, {@code Long.MAX_VALUE}];
     * @param id2 any number unequal to the id1 and from the same range;
     * @throws IllegalArgumentException if parameters are equal or any
     *          parameter is out of the required range.
     */
    public PairKey(long id1, long id2) {
	this.key = keyOf(id1, id2);
	this.lessId = id1 < id2 ? id1 : id2;
	this.moreId = id1 < id2 ? id2 : id1;
    }

    /**
     * An instance by the known key (see detail for exceptions).
     * 
     * @param key the String representation of the {@code BigInteger} 
     * 		number in the {@link #RADIX}.
     * @throws NullPointerException if the parameter is null.
     * @throws IllegalArgumentException if the parameter is unparsed or
     *          if by converting to BigInteger is out of the required range.
     */
    public PairKey(String key) {
	long[] pair = pairOf(key);
	this.key = key;
	this.lessId = pair[0];
	this.moreId = pair[1];
    }
    
    /**
     * Generates an unique key for two known IDs.
     * 
     * @param id1 any number from the range [1, {@code Long.MAX_VALUE}];
     * @param id2 any number unequal to {@code id1} and from the same range;
     * @return key an unique {@code String} representation of the {@code BigInteger} 
     * 		number in the {@link #RADIX}, that represents a pair of id1 and id2.
     * @throws IllegalArgumentException if parameters are equal or any
     *          parameter is out of the required range.
     */
    public synchronized static String keyOf(long id1, long id2) {
	if (id1 == id2 || id1 < 1 || id2 < 1)
	    throw new IllegalArgumentException("id1=" + id1 + ", id2=" + id2);
	BigInteger lessId = BigInteger.valueOf(id1 < id2 ? id1 : id2);
	BigInteger moreId = BigInteger.valueOf(id1 < id2 ? id2 : id1);
	return lessId
    		.add(moreId
    			.multiply(moreId
    				.subtract(BigInteger.valueOf(3)))
    			.divide(BigInteger.valueOf(2)))
    		.add(BigInteger.ONE)
    		.toString(RADIX);
    }
    
    /**
     * Generates two unknown IDs {lessId, moreId} by their known key.
     * 
     * @param key the String representation of the BigInteger number in the {@link #RADIX},
     *          such that the corresponding BigInteger number has to be limited by range
     *          {@code [BigInteger.ONE, PairKey.MAX_KEY]}.
     * @return a pair={lessId, moreId} that is represented by the method's parameter.
     * @throws NullPointerException if the parameter is null.
     * @throws IllegalArgumentException if the parameter is unparsed or
     *          if by converting to BigInteger is out of the required range.
     */
    public synchronized static long[] pairOf(String key) {
	if (key == null)
	    throw new NullPointerException("key can't be null");
	BigDecimal convertedKey = keyToBigDecimal(key);
	if (convertedKey == null)
	    throw new IllegalArgumentException("key = " + key);
	BigDecimal initial = convertedKey
                		.multiply(BigDecimal.valueOf(8))
                		.add(BigDecimal.ONE);
	BigDecimal approximation = sqrtBigDecimal(initial)
                        		.subtract(BigDecimal.ONE)
                        		.divide(BigDecimal.valueOf(2));
	BigDecimal moreId = approximation
                    		.round(new MathContext(approximation
                    			.toString().indexOf("."), RoundingMode.UP))
                    		.add(BigDecimal.ONE);
	BigDecimal lessId = convertedKey
                		.subtract(moreId
                			.multiply(moreId
                				.subtract(BigDecimal.valueOf(3)))
                			.divide(BigDecimal.valueOf(2)))
                		.subtract(BigDecimal.ONE);	
	return new long[] {lessId.longValue(), moreId.longValue()};
    }
    
    /** @return the encapsulated key of the pair*/
    public String key() {
	return this.key;
    }
    
    /** @return the encapsulated lesser id of the pair*/
    public long lessId() {
	return this.lessId;
    }
    
    /** @return the encapsulated higher id of the pair*/
    public long moreId() {
	return this.moreId;
    }
    
    /** @return the encapsulated key converted to {@code BigInteger} */
    public BigInteger keyAsBigInteger() {
	return new BigInteger(key, RADIX);
    }

    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((key == null) ? 0 : key.hashCode());
	return result;
    }

    /** PairKey's instances are checked for equality by their encapsulated keys. */
    @Override
    public boolean equals(Object obj) {
	if (this == obj)
	    return true;
	if (obj == null)
	    return false;
	if (getClass() != obj.getClass())
	    return false;
	PairKey other = (PairKey) obj;
	if (key == null) {
	    if (other.key != null)
		return false;
	} else if (!key.equals(other.key))
	    return false;
	return true;
    }

    @Override
    public String toString() {
	return "key=" + (key != null ? "'" + key + "'" : key) 
		+ " & pair={" + lessId + ", " + moreId + "}";
    }

    /** Sorts by the key that is converted to {@code BigInteger} number. */
    @Override
    public int compareTo(PairKey another) {
	//The simple approach that based on comparison of keys's lengths and chars.
	int len1 = key.length();
        int len2 = another.key.length();
        if (len1 != len2) {
            return len1 - len2;
        }
        for (int i = 0; i < len1; i++) {
            char ch1 = key.charAt(i);
            char ch2 = another.key.charAt(i);
            if (ch1 != ch2) {
        	return ch1 - ch2;
            }
        }
        return 0;
    }
    
    /*
     * The utility method for a square root extraction from the BigDecimal number,
     * with enough precision for PairKey.MAX_KEY.
     */
    private static BigDecimal sqrtBigDecimal(BigDecimal number) {
	BigDecimal precision = new BigDecimal("1E-21");
	BigDecimal root = BigDecimal.valueOf(StrictMath
		.pow(10, (number.toBigInteger().toString().length() - 1) / 2));	
	while (true) {
	    BigDecimal iteration = number
		    .divide(root, 21, RoundingMode.HALF_UP)
		    .add(root)
		    .divide(BigDecimal.valueOf(2), 21, RoundingMode.HALF_UP); 
	    if (root.subtract(iteration).abs().compareTo(precision) < 0)
		return root;
	    root = iteration;
	}
    }
    
    /*
     * The utility method checks key as String representation of BigInteger number,
     * and returns the key converted to BigDecimal number.
     */
    private static BigDecimal keyToBigDecimal(String key) {
	BigInteger pairKey;
	try {
	    pairKey = new BigInteger(key, RADIX);
	} catch (NumberFormatException e) {
	    return null;
	}
	if (pairKey.compareTo(BigInteger.ONE) < 0 || pairKey.compareTo(MAX_KEY) > 0)
	    return null;
	return new BigDecimal(pairKey);
    } 
    
    /* 
     * This serialization proxy agent ensures immutability of the PairCay instance 
     * during serialization/deserialization process by prevent possible violations 
     * of serialized data.
     */
    private static class SerializationProxy implements Serializable {
	private static final long serialVersionUID = 3417816734241312812L;
	private final String key;
	private final long lessId, moreId;
	
	SerializationProxy(PairKey pairKey) throws InvalidObjectException {
	    this.key = pairKey.key;
	    this.lessId = pairKey.lessId;
	    this.moreId = pairKey.moreId;
	    checkInvariants("Failed to serialize the PairKey instance ["
	    	+ pairKey + "], caused by immutability violation. "
	    	+ "The serialized instance is null!");
	}
	
	/*
	 * The presence of this method causes the serialization system
	 * to translate the serialization proxy back into an instance
	 * of the enclosed(outer) class upon deserialization. If the instance
         * immutability is violated, handles the corresponding exception with
         * printStackTrace(), so the program execution isn't interrupt but appear
         * the danger to face NullPointerException on the deserialized instance.
	 * 
	 * @return - the enclosed instance if successful check of its immutability,
	 * 	     unless - null.
	 */
	private Object readResolve() {
	    try {
		checkInvariants("Failed to deserialize the PairKey instance [key="
			+ key + " & pair={" + lessId + ", " + moreId
			+ "}], caused by immutability violation. "
			+ "The deserialized instance is null!");
		return new PairKey(lessId, moreId);
	    } catch (InvalidObjectException e) {
		e.printStackTrace();
	    }
	    return null;
	}
	
	private void checkInvariants(String messageOnFail) 
		throws InvalidObjectException {
	    if (key == null || lessId < 1 || moreId < 2 
		    || lessId == moreId || !key.equals(keyOf(lessId, moreId)))		
		throw new InvalidObjectException(messageOnFail);
	}
	
    }
    
    /* 
     * Replaces this instance by the proxy agent for serialization. If this
     * immutability is violated, handles the corresponding exception with
     * printStackTrace(), so the program execution isn't interrupt but appear
     * the danger to face NullPointerException on the deserialized instance.
     * 
     * @return - the proxy instance if successful check of this immutability,
     * 		 unless - null.
     */
    private Object writeReplace() {
	try {
	    return new SerializationProxy(this);
	} catch (InvalidObjectException e) {
	    e.printStackTrace();
	}
	return null;
    }
    
    /*
     * With this writeReplace method in place, the serialization system will never 
     * generate a serialized instance of this class, but an attacker might fabricate
     * one in an attempt to violate the class’s invariants. To guarantee that such an
     * attack would fail is added this method.
     */
    private void readObject(ObjectInputStream stream) throws InvalidObjectException {
	throw new InvalidObjectException("Proxy required!");
    }
    
// ========== TESTS FOR MULTITHREADED INSTANTIATION AND INTERFACES IMPLEMENTATION ========== //
    
    public static void main(String[] args) {
	boolean isColorSupport = true; // works in 'Eclipse'
	String r = isColorSupport ? "\u001B[31;1m" : "", g = isColorSupport ? "\u001B[32m" : "";
	String b = isColorSupport ? "\u001B[34;1m" : "", x = isColorSupport ? "\u001B[0m" : "";
	
	System.out.println(" ***** Tests of the PairKey class ***** ");
	System.out.println(" --- 1.TEST FOR MULTITHREADED INSTANTIATION --- ");
	int testedInstanceCount = 16;
	
	System.out.println(" As constructors use static methods so run in separate threads - create instanceByPair -> convert key -> chek instanceByKey -> add to ConcurrentHashMap:");
	java.util.concurrent.ConcurrentMap<String, PairKey> pairKeys = new java.util.concurrent.ConcurrentHashMap<>();
	java.util.List<Thread> tasks = new java.util.ArrayList<>();
	java.util.concurrent.CountDownLatch latch = new java.util.concurrent.CountDownLatch(testedInstanceCount + 2);
	
	//Next two threads will compete with instantiation threads for static methods pairOf() and keyOf() those are used by constructors of PairKey.
	Thread pairCompetitor = new Thread(() -> {
	    while(latch.getCount() > 2) 
		System.out.println(g+"Competitor_for_pairOf_method: pair=" + java.util.Arrays.toString(pairOf(MAX_KEY.toString(RADIX)))+x);
	    latch.countDown();
	    });
	pairCompetitor.setPriority(Thread.MAX_PRIORITY);
	Thread keyCompetitor = new Thread(() -> {
	    while(latch.getCount() > 2) 
		System.out.println(g+"Competitor_for_keyOf_method : key='" + keyOf(Long.MAX_VALUE, Long.MAX_VALUE - 1) + "'"+x);
	    latch.countDown();
	    });
	keyCompetitor.setPriority(Thread.MAX_PRIORITY);
	tasks.add(pairCompetitor);
	tasks.add(keyCompetitor);
	for (int i = 1; i <= testedInstanceCount; i++) {
	    tasks.add(new Thread(() -> {
		StringBuilder sb = new StringBuilder();
		sb.append(b+ String.format("%-15s", Thread.currentThread().getName()) +x);
		
		long id1 = (long) (Math.random() * 9 + 1);
        	long id2 = (long) (Math.random() * 10 + 10);
        	PairKey byPair = new PairKey(id1, id2);
        		    
        	sb.append(": " + byPair + " -> converted_key = ");
        	sb.append(String.format("%3d", new BigInteger(byPair.key, RADIX)));
        	
        	PairKey byKey = new PairKey(byPair.key);
        	boolean check = byPair.key.equals(keyOf(byKey.lessId, byKey.moreId));
        	String mark = check ? g+ check +x : r+ check +x;
        	sb.append(" -> instantiation check: " + mark);
        	
        	sb.append(pairKeys.containsValue(byKey) ? " -> repeated" : " -> added");
        	pairKeys.putIfAbsent(byKey.key, byPair);
        	
		System.out.println(sb);
		latch.countDown();
	    }, "Instantiator_" + i));
	}
	tasks.forEach((task) -> task.start());
	try {
	    latch.await();
	} catch (InterruptedException e) {
	    e.printStackTrace();
	} 
	
	System.out.println("\n --- 2.TEST FOR COMPARABLE INTERFACE IMPLEMENTATION --- ");
	System.out.println(" Sorted by TreeMap the already filled ConcurredHashMap:");
	new java.util.TreeMap<String, PairKey>(pairKeys).keySet().forEach(key -> {
	    System.out.println("key='" + key + "' -> converted_key = " 
		    		+ g+ String.format("%3d", new BigInteger(key, RADIX)) +x);
	});
	
	System.out.println("\n --- 3.TEST FOR SERIALIZABLE INTERFACE IMPLEMENTATION --- ");
	// Normal process of serialization/deserialization:
	try (java.io.ByteArrayOutputStream bos = new java.io.ByteArrayOutputStream();
		java.io.ObjectOutputStream out = new java.io.ObjectOutputStream(bos)) {
	    PairKey serialized = new PairKey("null");
	    
	    System.out.println("1) The instance before normal serialization  - " + g+ serialized +x);
	    
	    out.writeObject(serialized);
	    
	    try (java.io.ByteArrayInputStream bis = new java.io.ByteArrayInputStream(bos.toByteArray());
			ObjectInputStream in = new ObjectInputStream(bis)) {
		PairKey deserialized = (PairKey) in.readObject();
		
		System.out.println("   The instance after normal deserialization - " + g+ deserialized +x);
		
	    } catch (java.io.IOException | ClassNotFoundException e) {
		e.printStackTrace();
	    }		
	} catch (java.io.IOException e) {
    	    e.printStackTrace();
    	}
	
	// Failed serialization of the violated instance:
	try (java.io.ByteArrayOutputStream bos = new java.io.ByteArrayOutputStream();
		java.io.ObjectOutputStream out = new java.io.ObjectOutputStream(bos)) {
	    PairKey violated = new PairKey("null");
	    java.lang.reflect.Field key = violated.getClass().getDeclaredField("key");
	    key.setAccessible(true);
	    java.lang.reflect.Field modifiers = java.lang.reflect.Field.class.getDeclaredField("modifiers");
	    modifiers.setAccessible(true);
	    modifiers.setInt(key, key.getModifiers() & ~java.lang.reflect.Modifier.FINAL);
	    key.set(violated, null);
	    
	    System.out.println("2) Try to serialize the violated instance    - " + b+ violated +x + " (after that must be thrown 'InvalidObjectException ex' and catched with 'ex.printStackTrace(failMessage)'):");
	    out.writeObject(violated);
	    
	    try (java.io.ByteArrayInputStream bis = new java.io.ByteArrayInputStream(bos.toByteArray());
			ObjectInputStream in = new ObjectInputStream(bis)) {
		
		PairKey deserialViolated= (PairKey) in.readObject();
		System.out.println("   The deserialized instance after violated serialization - " + b+ deserialViolated +x);
	    
	    } catch (java.io.IOException | ClassNotFoundException e) {
		e.printStackTrace();
	    }		
	
	} catch (java.io.IOException | SecurityException | NoSuchFieldException | IllegalArgumentException | IllegalAccessException e) {
    	    e.printStackTrace();
    	}
	
	// Failed deserialization of the byte array that represents the violated instance:
	byte[] bytesOfViolatedInstance = new byte[] {
	-84,  -19,    0,    5,  115,  114,    0,   48,  117,   97,   46,  103,  114,  117,  107,   46,  109,  111,  100,  101,  108,   46,
	117,  116,  105,  108,  105,  116,  121,   46,   80,   97,  105,  114,   75,  101,  121,   36,   83,  101,  114,  105,   97,  108,
	105,  122,   97,  116,  105,  111,  110,   80,  114,  111,  120,  121,   47,  110, -122,   54,   31,  -42,  -48,   44,    2,    0,
	  3,   74,    0,    6,  108,  101,  115,  115,   73,  100,   74,    0,    6,  109,  111,  114,  101,   73,  100,   76,    0,    3,
	107,  101,  121,  116,    0,   18,   76,  106,   97,  118,   97,   47,  108,   97,  110,  103,   47,   83,  116,  114,  105,  110,
	103,   59,  120,  112,    0,    0,    0,    0,    0,    0,    1,  -53,    0,    0,    0,    0,    0,    0,    5,  -43,  112 };
	try (java.io.ByteArrayInputStream bis = new java.io.ByteArrayInputStream(bytesOfViolatedInstance);
		ObjectInputStream in = new ObjectInputStream(bis)) {
	    
	    System.out.println("3) Try to deserialize the byte array of the violated instance (after that must be thrown 'InvalidObjectException ex' and catched with 'ex.printStackTrace(failMessage)'):");
	    PairKey deserialViolated= (PairKey) in.readObject();
	    System.out.println("   The instance after deserialization of the violeted byte array - " + b+ deserialViolated +x);		
        
	} catch (java.io.IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
	
	System.out.println("\n *** All tests are successfully completed! ***");
    }
    
}
