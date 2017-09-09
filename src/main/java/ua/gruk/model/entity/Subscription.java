package ua.gruk.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import ua.gruk.model.utility.PairKey;

@Entity
@Table(name = "subscriptions")
public class Subscription implements Serializable {
    private static final long serialVersionUID = 7730555384931223630L;
    @Id
    @GeneratedValue
    private long id;
    @Column(name = "pair_key", nullable = false, unique = true)
    private String pairKey;
    @ManyToOne
    @JoinColumn(name = "first_citizen_id", referencedColumnName = "id")
    private Citizen firstCitizen;
    @ManyToOne
    @JoinColumn(name = "second_citizen_id", referencedColumnName = "id")
    private Citizen secondCitizen;
    private boolean isFirstSubscriber;
    private boolean isSecondSubscriber;

    public static Subscription instance(Citizen subscriber, Citizen to) { 
	Subscription subscription = new Subscription();
	subscription.pairKey = PairKey.keyOf(subscriber.getId(), to.getId());	
	if (subscriber.getId() < to.getId()) {
	    subscription.firstCitizen = subscriber;
	    subscription.secondCitizen = to;
	    subscription.isFirstSubscriber = true;
	} else {
	    subscription.firstCitizen = to;
	    subscription.secondCitizen = subscriber;
	    subscription.isSecondSubscriber = true;
	}
	return subscription;
    }

    public long getId() {
        return id;
    }

    public String getPairKey() {
        return pairKey;
    }

    public Citizen getFirstCitizen() {
        return firstCitizen;
    }

    public Citizen getSecondCitizen() {
        return secondCitizen;
    }

    public boolean isFirstSubscriber() {
        return isFirstSubscriber;
    }

    public boolean isSecondSubscriber() {
        return isSecondSubscriber;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setPairKey(String pairKey) {
        this.pairKey = pairKey;
    }

    public void setFirstCitizen(Citizen firstCitizen) {
        this.firstCitizen = firstCitizen;
    }

    public void setSecondCitizen(Citizen secondCitizen) {
        this.secondCitizen = secondCitizen;
    }

    public void setFirstSubscriber(boolean isFirstSubscriber) {
        this.isFirstSubscriber = isFirstSubscriber;
    }

    public void setSecondSubscriber(boolean isSecondSubscriber) {
        this.isSecondSubscriber = isSecondSubscriber;
    }

    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((pairKey == null) ? 0 : pairKey.hashCode());
	return result;
    }

    @Override
    public boolean equals(Object obj) {
	if (this == obj)
	    return true;
	if (obj == null)
	    return false;
	if (getClass() != obj.getClass())
	    return false;
	Subscription other = (Subscription) obj;
	if (pairKey == null) {
	    if (other.pairKey != null)
		return false;
	} else if (!pairKey.equals(other.pairKey))
	    return false;
	return true;
    }

    @Override
    public String toString() {
	return "Subscription [id=" + id + ", pairKey=" + pairKey + ", firstCitizen=" + firstCitizen.getId() + ", secondCitizen="
		+ secondCitizen.getId() + ", isFirstSubscriber=" + isFirstSubscriber + ", isSecondSubscriber="
		+ isSecondSubscriber + "]";
    }

}
