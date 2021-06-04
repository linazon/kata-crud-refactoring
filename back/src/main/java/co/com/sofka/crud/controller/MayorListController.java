package co.com.sofka.crud.controller;

import co.com.sofka.crud.entity.MayorList;
import co.com.sofka.crud.service.MayorListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MayorListController {

    @Autowired
    private MayorListService serviceMayorList;

    @GetMapping(value = "api/mayorlists")
    public Iterable<MayorList> list(){
        return serviceMayorList.list();
    }

    @PostMapping(value = "api/mayorlist")
    public MayorList save(@RequestBody MayorList mayorList){
        return serviceMayorList.save(mayorList);
    }

    @PutMapping(value = "api/mayorlist")
    public MayorList update(@RequestBody MayorList mayorList){
        if(mayorList.getIdlist() != null){
            return serviceMayorList.save(mayorList);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/mayorlist")
    public void delete(@PathVariable("id")Long idList){
        serviceMayorList.delete(idList);
    }

    @GetMapping(value = "api/{id}/mayorlist")
    public MayorList get(@PathVariable("id") Long idList){
        return serviceMayorList.get(idList);
    }
}
