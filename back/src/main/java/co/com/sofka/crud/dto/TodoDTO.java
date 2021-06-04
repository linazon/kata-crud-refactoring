package co.com.sofka.crud.dto;

public class TodoDTO {

    private Long id;
    private String nameDTO;
    private boolean completedDTO;
    private String identifica;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameDTO() {
        return nameDTO;
    }

    public void setNameDTO(String nameDTO) {
        this.nameDTO = nameDTO;
    }

    public boolean isCompletedDTO() {
        return completedDTO;
    }

    public void setCompletedDTO(boolean completedDTO) {
        this.completedDTO = completedDTO;
    }

    public String getIdentifica() {
        return identifica;
    }

    public void setIdentifica(String identifica) {
        this.identifica = identifica;
    }
}
