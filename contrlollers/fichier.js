
exports.add = async (req, res) =>{

    return      res.status(201).json({
                message: 'Creation réussie',
                status: 'OK',
                data: "Ajout de fichier",
                statusCode: 201 
        })
}

exports.all = async (req, res) =>{

    return      res.status(200).json({
                message: 'Obtention de fichiers réussies',
                status: 'OK',
                data: "Liste des fichiers",
                statusCode: 200
})
}

exports.one = async (req, res) =>{

    return      res.status(200).json({
                message: 'Obtention du fichier  réussie',
                status: 'OK',
                data: "un fichier " +req.params.id,
                statusCode: 200
})
}

exports.update = async (req, res) =>{

    return      res.status(200).json({
                message: 'Modification de fichiers réussies',
                status: 'OK',
                data: "Fichiers modifies avec succes",
                statusCode: 200
})
}

exports.delete = async (req, res) =>{

    return      res.status(200).json({
                message: 'Suppression  de fichiers réussies',
                status: 'OK',
                data: "Fichiers supprimes",
                statusCode: 200
})
}