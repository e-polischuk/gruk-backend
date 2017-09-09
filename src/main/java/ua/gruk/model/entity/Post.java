package ua.gruk.model.entity;

import java.io.IOException;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import ua.gruk.model.embeddable.EmbedFile;

@Entity
@Table(name = "posts")
public class Post implements Serializable, Comparable<Post> {
    private static final long serialVersionUID = -8939412181512244501L;
    @Id
    @GeneratedValue
    private long id;
    @Column(name = "text_content", length = 1000)
    private String textContent;    
    @ManyToOne
    @JoinColumn(name = "wall_owner_id", referencedColumnName = "id")
    private Citizen wallOwner;
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "community_id", referencedColumnName = "id")
    private Community community;
    @ManyToOne
    @JoinColumn(name = "author_id", referencedColumnName = "id", nullable = false)
    private Citizen author;
    @Column(name = "date_time", nullable = false )
    private LocalDateTime dateTime;
    @JsonBackReference
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    private Set<PostFile> files = new HashSet<>();
    @JsonBackReference
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    @OrderBy("id DESC")
    private SortedSet<Comment> comments = new TreeSet<>();
    @JsonBackReference
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    private Map<Long, Like> likes = new HashMap<>();    

    public Post() {
    }

    public Post(String textContent, Citizen wallOwner, Community orWallCommunity, Citizen author, MultipartFile...files) throws IOException {
	this.textContent = textContent;
	for (MultipartFile file : files) {
	    this.files.add(new PostFile(file, this));
	}
	this.wallOwner = wallOwner;
	this.community = orWallCommunity;
	this.author = author;
	this.dateTime = LocalDateTime.now();
    }
    
    public Like like(long likerId) {
	if (likes.containsKey(likerId)) return null;
	return likes.put(likerId, new Like(this, likerId));
    }

    public Set<PostFile> addFiles(PostFile...files) {
	this.files.add((PostFile) Arrays.asList(files));
	return this.files;
    }

    public Set<PostFile> deleteFile(PostFile file) {
	files.remove(file);
	return files;
    }

    public Comment addComment(String text, EmbedFile file, Citizen author) {
	Comment comment = new Comment(text, file, this, author);
	comments.add(comment);
	return comment;
    }

    public Post deleteComment(Comment comment) {
	comments.remove(comment);
	return this;
    }

    public long getId() {
        return id;
    }

    public String getTextContent() {
        return textContent;
    }

    public Set<PostFile> getFiles() {
        return files;
    }

    public SortedSet<Comment> getComments() {
        return comments;
    }

    public Citizen getWallOwner() {
        return wallOwner;
    }

    public Community getCommunity() {
        return community;
    }

    public Citizen getAuthor() {
        return author;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public Map<Long, Like> getLikes() {
        return likes;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTextContent(String textContent) {
        this.textContent = textContent;
    }

    public void setFiles(Set<PostFile> files) {
        this.files = files;
    }

    public void setComments(SortedSet<Comment> comments) {
        this.comments = comments;
    }

    public void setWallOwner(Citizen wallOwner) {
        this.wallOwner = wallOwner;
    }

    public void setCommunity(Community community) {
        this.community = community;
    }

    public void setAuthor(Citizen author) {
        this.author = author;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public void setLikes(Map<Long, Like> likes) {
        this.likes = likes;
    }

    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((author == null) ? 0 : author.hashCode());
	result = prime * result + ((community == null) ? 0 : community.hashCode());
	result = prime * result + ((dateTime == null) ? 0 : dateTime.hashCode());
	result = prime * result + ((wallOwner == null) ? 0 : wallOwner.hashCode());
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
	Post other = (Post) obj;
	if (author == null) {
	    if (other.author != null)
		return false;
	} else if (!author.equals(other.author))
	    return false;
	if (community == null) {
	    if (other.community != null)
		return false;
	} else if (!community.equals(other.community))
	    return false;
	if (dateTime == null) {
	    if (other.dateTime != null)
		return false;
	} else if (!dateTime.equals(other.dateTime))
	    return false;
	if (wallOwner == null) {
	    if (other.wallOwner != null)
		return false;
	} else if (!wallOwner.equals(other.wallOwner))
	    return false;
	return true;
    }

    @Override
    public int compareTo(Post another) {
	return Long.valueOf(id).compareTo(another.id);
    }
    
}
