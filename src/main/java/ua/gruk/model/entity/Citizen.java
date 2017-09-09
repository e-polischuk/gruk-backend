package ua.gruk.model.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

import ua.gruk.model.embeddable.EmbedFile;
import ua.gruk.model.embeddable.FullName;

@Entity
@Table(name = "citizens")
public class Citizen implements Serializable {
    private static final long serialVersionUID = -118017985328353489L;
    @Id
    @GeneratedValue
    private long id;
    @Column(name = "email", length = 30, nullable = false, unique = true)
    private String email;
    @JsonIgnore
    @Column(name = "password", length = 30, nullable = false)
    private String password;
    @Embedded
    private FullName citizenName;
    @Embedded
    private EmbedFile profilePhoto;
    @ManyToOne
    @JoinColumn(name = "community_id", referencedColumnName = "id")
    private Community community;
    private String status;    
    private String info;
    @Column(name = "phone_number", length = 30)
    private String phoneNumber;
    @Temporal(value = TemporalType.DATE)
    private Date birthday;
    @JsonIgnore
    @Column(name = "registration", nullable = false)
    private LocalDate registration;
    @JsonIgnore
    private boolean isBlocked;
    
    public static Builder getBuilder() {
	Citizen citizen = new Citizen();
	return new Builder(citizen);
    }
    
    public Builder getModifier() {
	return new Builder(this);
    }
    
    public static class Builder {
	private final Citizen citizen;
	
	private Builder(Citizen citizen) {
	    this.citizen = citizen;
	}
	
	public Builder id(long id) {
	    citizen.setId(id);
	    return this;
	}
	public Builder email(String email) {
	    citizen.setEmail(email);
	    return this;
	}
	public Builder password(String password) {
	    citizen.setPassword(password);
	    return this;
	}
	public Builder citizenName(String firstName, String secondName, String nickname) {
	    citizen.setCitizenName(new FullName(firstName, secondName, nickname));
	    return this;
	}
	public Builder profilePhoto(EmbedFile profilePhoto) {
	    citizen.setProfilePhoto(profilePhoto);
	    return this;
	}
	public Builder community(Community community) {
	    citizen.setCommunity(community);
	    return this;
	}
	public Builder status(String status) {
	    citizen.setStatus(status);
	    return this;
	}
	public Builder info(String info) {
	    citizen.setInfo(info);
	    return this;
	}
	public Builder phoneNumber(String phoneNumber) {
	    citizen.setPhoneNumber(phoneNumber);
	    return this;
	}
	public Builder birthday(Date birthday) {
	    citizen.setBirthday(birthday);
	    return this;
	}
	public Builder registration(LocalDate registration) {
	    citizen.setRegistration(registration);
	    return this;
	}
	public Builder isBlocked(boolean isBlocked) {
	    citizen.setBlocked(isBlocked);
	    return this;
	}
	public Citizen end() {
	    return citizen;
	}
    }

    public long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public FullName getCitizenName() {
        return citizenName;
    }

    public EmbedFile getProfilePhoto() {
        return profilePhoto;
    }

    public Community getCommunity() {
        return community;
    }

    public String getStatus() {
        return status;
    }

    public String getInfo() {
        return info;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public Date getBirthday() {
        return birthday;
    }

    public LocalDate getRegistration() {
        return registration;
    }

    public boolean isBlocked() {
        return isBlocked;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setCitizenName(FullName citizenName) {
        this.citizenName = citizenName;
    }

    public void setProfilePhoto(EmbedFile profilePhoto) {
        this.profilePhoto = profilePhoto;
    }

    public void setCommunity(Community community) {
        this.community = community;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public void setRegistration(LocalDate registration) {
        this.registration = registration;
    }

    public void setBlocked(boolean isBlocked) {
        this.isBlocked = isBlocked;
    }

    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((email == null) ? 0 : email.hashCode());
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
	Citizen other = (Citizen) obj;
	if (email == null) {
	    if (other.email != null)
		return false;
	} else if (!email.equals(other.email))
	    return false;
	return true;
    }

}
