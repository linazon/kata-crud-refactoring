package co.com.sofka.crud.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table( name = "mayorlist")
public class MayorList {
    @Id
    @GeneratedValue

    private Long idlist;
    private String groupname;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "groupname")
    //Se instancia la entidad
    private Set<Todo> todo;

    public Set<Todo> getTodo() {
        return todo;
    }

    public Long getIdlist() {
        return idlist;
    }

    public void setIdlist(Long idlist) {
        this.idlist = idlist;
    }

    public String getGroupname() {
        return groupname;
    }

    public void setGroupname(String groupname) {
        this.groupname = groupname;
    }
}
