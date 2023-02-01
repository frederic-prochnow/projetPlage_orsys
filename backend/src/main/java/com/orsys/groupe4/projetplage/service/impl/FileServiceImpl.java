package com.orsys.groupe4.projetplage.service.impl;

import com.orsys.groupe4.projetplage.business.File;
import com.orsys.groupe4.projetplage.dao.FileDao;
import com.orsys.groupe4.projetplage.service.FileService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class FileServiceImpl implements FileService {

    private FileDao dao;

    @Override
    public List<File> recupererFiles() {
        return dao.findAll();
    }
}
