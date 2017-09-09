package ua.gruk.model.entity;

import java.io.IOException;
import java.io.Serializable;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import ua.gruk.model.embeddable.EmbedFile;

@Entity
@Table(name = "mediaresources")
public class PostFile implements Serializable {
    private static final long serialVersionUID = 4983572084904669961L;
    @Id
    @GeneratedValue
    private long id;
    @Embedded
    private EmbedFile file;
    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    private Post container;
    
    public PostFile() {
    }
    
    public PostFile(MultipartFile file, Post container) throws IOException {
	this.file = new EmbedFile(file);
	this.container = container;
    }

    public long getId() {
        return id;
    }

    public EmbedFile getFile() {
        return file;
    }

    public Post getContainer() {
        return container;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setFile(EmbedFile file) {
        this.file = file;
    }

    public void setContainer(Post container) {
        this.container = container;
    }

    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((container == null) ? 0 : container.hashCode());
	result = prime * result + ((file == null) ? 0 : file.hashCode());
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
	PostFile other = (PostFile) obj;
	if (container == null) {
	    if (other.container != null)
		return false;
	} else if (!container.equals(other.container))
	    return false;
	if (file == null) {
	    if (other.file != null)
		return false;
	} else if (!file.equals(other.file))
	    return false;
	return true;
    }

}
