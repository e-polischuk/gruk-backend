package ua.gruk.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "communities")
public class Community implements Serializable {
    private static final long serialVersionUID = 6078063126646958005L;
    @Id
    @GeneratedValue
    private int id;
    private String communityName;
    private String rayon;
    private String oblast;
    @Column(name = "wiki_link", nullable = false, unique = true)
    private String wikiLink;
    private String ownSite;

    public static Builder getBuilder() {
	Community community = new Community();
	return new Builder(community);
    }
    
    public Builder getModifier() {
	return new Builder(this);
    }
    
    public static class Builder {
	private final Community community;
	
	private Builder(Community community) {
	    this.community = community;
	}
	
	public Builder id(int id) {
	    community.setId(id);
	    return this;
	}
	public Builder communityName(String communityName) {
	    community.setCommunityName(communityName);
	    return this;
	}
	public Builder rayon(String rayon) {
	    community.setRayon(rayon);
	    return this;
	}
	public Builder oblast(String oblast) {
	    community.setOblast(oblast);
	    return this;
	}
	public Builder wikiLink(String wikiLink) {
	    community.setWikiLink(wikiLink);
	    return this;
	}
	public Builder ownSite(String ownSite) {
	    community.setOwnSite(ownSite);
	    return this;
	}
	public Community end() {
	    return community;
	}
    }

    public int getId() {
        return id;
    }

    public String getCommunityName() {
        return communityName;
    }

    public String getRayon() {
        return rayon;
    }

    public String getOblast() {
        return oblast;
    }

    public String getWikiLink() {
        return "https://uk.wikipedia.org/wiki/".concat(wikiLink);
    }

    public String getOwnSite() {
        return ownSite;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setCommunityName(String communityName) {
        this.communityName = communityName;
    }

    public void setRayon(String rayon) {
        this.rayon = rayon;
    }

    public void setOblast(String oblast) {
        this.oblast = oblast;
    }

    public void setWikiLink(String wikiLink) {
        this.wikiLink = wikiLink;
    }

    public void setOwnSite(String ownSite) {
        this.ownSite = ownSite;
    }

    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((wikiLink == null) ? 0 : wikiLink.hashCode());
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
	Community other = (Community) obj;
	if (wikiLink == null) {
	    if (other.wikiLink != null)
		return false;
	} else if (!wikiLink.equals(other.wikiLink))
	    return false;
	return true;
    }
    
}
