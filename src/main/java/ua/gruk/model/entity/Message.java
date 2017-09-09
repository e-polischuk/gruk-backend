package ua.gruk.model.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import ua.gruk.model.embeddable.EmbedFile;
import ua.gruk.model.utility.PairKey;

@Entity
@Table(name = "messages")
public class Message implements Serializable, Comparable<Message> {
    private static final long serialVersionUID = -5103751070843038969L;
    @Id
    @GeneratedValue
    private long id;
    @Column(name = "pair_key", nullable = false)
    private String pairKey;
    private String textContent;
    @Embedded
    private EmbedFile embeddedFile;
    @ManyToOne
    @JoinColumn(name = "sender_id", referencedColumnName = "id")
    private Citizen sender;
    @ManyToOne
    @JoinColumn(name = "receiver_id", referencedColumnName = "id")
    private Citizen receiver;
    @Column(name = "date_time", nullable = false)
    private LocalDateTime dateTime;
    private boolean red;

    public Message() {
    }

    public Message(String textContent, EmbedFile embeddedFile, Citizen from, Citizen to) {
	this.pairKey = PairKey.keyOf(from.getId(), to.getId());
	this.textContent = textContent;
	this.embeddedFile = embeddedFile;
	this.sender = from;
	this.receiver = to;
	this.dateTime = LocalDateTime.now();
	this.red = false;
    }

    public long getId() {
        return id;
    }

    public String getPairKey() {
        return pairKey;
    }

    public String getTextContent() {
        return textContent;
    }

    public EmbedFile getEmbeddedFile() {
        return embeddedFile;
    }

    public Citizen getSender() {
        return sender;
    }

    public Citizen getReceiver() {
        return receiver;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setPairKey(String pairKey) {
        this.pairKey = pairKey;
    }

    public void setTextContent(String textContent) {
        this.textContent = textContent;
    }

    public void setEmbeddedFile(EmbedFile embeddedFile) {
        this.embeddedFile = embeddedFile;
    }

    public void setSender(Citizen sender) {
        this.sender = sender;
    }

    public void setReceiver(Citizen receiver) {
        this.receiver = receiver;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public boolean isRed() {
        return red;
    }

    public void setRed(boolean red) {
        this.red = red;
    }

    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((dateTime == null) ? 0 : dateTime.hashCode());
	result = prime * result + ((receiver == null) ? 0 : receiver.hashCode());
	result = prime * result + ((sender == null) ? 0 : sender.hashCode());
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
	Message other = (Message) obj;
	if (dateTime == null) {
	    if (other.dateTime != null)
		return false;
	} else if (!dateTime.equals(other.dateTime))
	    return false;
	if (receiver == null) {
	    if (other.receiver != null)
		return false;
	} else if (!receiver.equals(other.receiver))
	    return false;
	if (sender == null) {
	    if (other.sender != null)
		return false;
	} else if (!sender.equals(other.sender))
	    return false;
	return true;
    }

    @Override
    public int compareTo(Message another) {
	return Long.valueOf(id).compareTo(another.id);
    }

    @Override
    public String toString() {
	return "Message [id=" + id + ", pairKey=" + pairKey + ", textContent=" + textContent + ", sender=" + sender
		+ ", receiver=" + receiver + ", dateTime=" + dateTime + "]";
    }
    
}
