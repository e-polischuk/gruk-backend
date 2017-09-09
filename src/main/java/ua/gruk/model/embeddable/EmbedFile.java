package ua.gruk.model.embeddable;

import java.io.IOException;
import java.io.Serializable;
import java.util.Arrays;

import javax.persistence.Embeddable;

import org.springframework.web.multipart.MultipartFile;

@Embeddable
public class EmbedFile implements Serializable {
    private static final long serialVersionUID = -2209760293792988490L;
    private String fileName;
    private byte[] fileData;

    public EmbedFile() {
    }

    public EmbedFile(MultipartFile file) throws IOException {
	this.fileName = file.getOriginalFilename();
	this.fileData = file.getBytes();
    }

    public String getFileName() {
        return fileName;
    }

    public byte[] getFileData() {
        return fileData;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public void setFileData(byte[] fileData) {
        this.fileData = fileData;
    }

    @Override
    public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + Arrays.hashCode(fileData);
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
	EmbedFile other = (EmbedFile) obj;
	if (!Arrays.equals(fileData, other.fileData))
	    return false;
	return true;
    }

}
