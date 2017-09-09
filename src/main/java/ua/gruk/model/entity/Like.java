package ua.gruk.model.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "likes")
public class Like implements Serializable {
    private static final long serialVersionUID = -4991486221944642400L;
    @Id
    @GeneratedValue
    private long id;
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    private Post toPost;
    private long likerId;
    @Column(name = "date_time", nullable = false)
    private LocalDateTime dateTime;

    public Like() {
    }

    public Like(Post toPost, long likerId) {
	this.toPost = toPost;
	this.likerId = likerId;
	this.dateTime = LocalDateTime.now();
    }

    public long getId() {
        return id;
    }

    public Post getToPost() {
        return toPost;
    }

    public long getLikerId() {
        return likerId;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setToPost(Post toPost) {
        this.toPost = toPost;
    }

    public void setLikerId(long likerId) {
        this.likerId = likerId;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + (int) (likerId ^ (likerId >>> 32));
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
	Like other = (Like) obj;
	if (likerId != other.likerId)
	    return false;
	if (toPost == null) {
	    if (other.toPost != null)
		return false;
	} else if (!toPost.equals(other.toPost))
	    return false;
	return true;
    }

}
