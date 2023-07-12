import { child, get, ref, set } from "firebase/database"
import { v4 } from "uuid"
import { db } from "../../services/fb"

export default function handler(req, res) {

    if (req.method == 'GET') {

        get(child(ref(db), 'event/evento')).then(snapshot=>{
            const retorno = []
            snapshot.forEach(item=>{
                retorno.push(item.val())
            })
            res.status(200).json(retorno)
        })

    } else if (req.method == 'POST') {
        const id = v4()
        const dados = req.body
        dados.id = id

        set(ref(db, 'event/evento/' + id), dados)
        res.status(200).json(dados)
    }

}
