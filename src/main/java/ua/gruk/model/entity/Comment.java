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

import com.fasterxml.jackson.annotation.JsonManagedReference;

import ua.gruk.model.embeddable.EmbedFile;

@Entity
@Table(name = "comments")
public class Comment implements Serializable, Comparable<Comment> {
    private static final long serialVersionUID = 7612253292782301729L;
    @Id
    @GeneratedValue
    private long id;
    private String textContent;
    @Embedded
    private EmbedFile embeddedFile;
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    private Post toPost;
    @ManyToOne
    @JoinColumn(name = "author_id", referencedColumnName = "id")
    private Citizen author;
    @Column(name = "date_time", nullable = false)
    private LocalDateTime dateTime;

    public Comment() {
    }

    public Comment(String textContent, EmbedFile embeddedFile, Post toPost, Citizen author) {
	this.textContent = textContent;
	this.embeddedFile = embeddedFile;
	this.toPost = toPost;
	this.author = author;
	this.dateTime = LocalDateTime.now();
    }    

    public long getId() {
        return id;
    }

    public String getTextContent() {
        return textContent;
    }

    public EmbedFile getEmbeddedFile() {
        return embeddedFile;
    }

    public Post getToPost() {
        return toPost;
    }

    public Citizen getAuthor() {
        return author;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTextContent(String textContent) {
        this.textContent = textContent;
    }

    public void setEmbeddedFile(EmbedFile embeddedFile) {
        this.embeddedFile = embeddedFile;
    }

    public void setToPost(Post toPost) {
        this.toPost = toPost;
    }

    public void setAuthor(Citizen author) {
        this.author = author;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((author == null) ? 0 : author.hashCode());
	result = prime * result + ((dateTime == null) ? 0 : dateTime.hashCode());
	result = prime * result + ((toPost == null) ? 0 : toPost.hashCode());
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
	Comment other = (Comment) obj;
	if (author == null) {
	    if (other.author != null)
		return false;
	} else if (!author.equals(other.author))
	    return false;
	if (dateTime == null) {
	    if (other.dateTime != null)
		return false;
	} else if (!dateTime.equals(other.dateTime))
	    return false;
	if (toPost == null) {
	    if (other.toPost != null)
		return false;
	} else if (!toPost.equals(other.toPost))
	    return false;
	return true;
    }

    @Override
    public int compareTo(Comment another) {
	return Long.valueOf(id).compareTo(another.id);
    }

}
