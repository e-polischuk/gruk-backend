package ua.gruk.model.utility;

import java.util.Collection;
import java.util.SortedSet;
import java.util.TreeSet;

import ua.gruk.model.entity.Message;

public class Dialog {
    private final String pairKey;
    private final long holder;
    private SortedSet<Message> dialog = new TreeSet<>();
    private int unredCount;
    private boolean visible;

    public Dialog(String pairKey, long holder) {
	this.pairKey = pairKey;
	this.holder = holder;
    }
    
    public Dialog(String pairKey, Collection<Message> messages, long holder) {
	this.pairKey = pairKey;
	this.holder = holder;
	addAll(messages);
    }

    public boolean add(Message message) {
	if (message == null) throw new IllegalArgumentException();
	if (!message.isRed() && message.getReceiver().getId() == holder) unredCount++;
	return dialog.add(message);
    }
    
    public boolean addAll(Collection<Message> messages) {
	validate(messages);
	messages.forEach(msg -> {
	    if (!msg.isRed() && msg.getReceiver().getId() == holder) unredCount++;
	});
	return dialog.addAll(messages);
    }
    
    public String getPairKey() {
        return pairKey;
    }

    public SortedSet<Message> getDialog() {
        return dialog;
    }
    
    public int getUnredCount() {
        return unredCount;
    }

    public long getHolder() {
        return holder;
    }

    public boolean isVisible() {
        return visible;
    }

    public void setDialog(SortedSet<Message> dialog) {
        this.dialog = dialog;
    }

    public void setVisible(boolean visible) {
        this.visible = visible;
    }

    private boolean validate(Collection<Message> messages) {
	if (messages == null) throw new IllegalArgumentException();
	messages.forEach(message -> {
	    if (!message.getPairKey().equals(pairKey)) throw new IllegalArgumentException();
	});
	return true;
    }

    @Override
    public String toString() {
	return "pairKey=" + pairKey + ", dialog=" + dialog;
    }
    
}
