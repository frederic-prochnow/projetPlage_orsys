package com.orsys.groupe4.projetplage.controller.rest;

import com.orsys.groupe4.projetplage.business.File;
import com.orsys.groupe4.projetplage.service.FileService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class FileRestController {
    private FileService fileSer;

    @GetMapping("files")
    public List<File> getFiles() {
        return fileSer.recupererFiles();
    }
}
