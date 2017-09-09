package ua.gruk.model.embeddable;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class FullName implements Serializable {
    private static final long serialVersionUID = 4457649827617352640L;
    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(name = "second_name", nullable = false)
    private String secondName;
    private String nickName;

    public FullName() {
    }

    public FullName(String firstName, String secondName, String nickName) {
	this.firstName = firstName;
	this.secondName = secondName;
	this.nickName = nickName;
    }

    public String getFirstName() {
	return firstName;
    }

    public String getSecondName() {
	return secondName;
    }

    public String getNickName() {
	return nickName;
    }

    public void setFirstName(String firstName) {
	this.firstName = firstName;
    }

    public void setSecondName(String secondName) {
	this.secondName = secondName;
    }

    public void setNickName(String nickName) {
	this.nickName = nickName;
    }

}
