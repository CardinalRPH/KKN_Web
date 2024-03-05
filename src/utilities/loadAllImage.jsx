import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import app from "../../server/firebase/config";

const toArrayRaw = (object) => {
    return object.map(obj => Object.values(obj)[1]);
}

const splitDot = (string) => {
    return string.substring(0, string.lastIndexOf('.'));
}

const geterURI = async (ref) => {
    try {
        const result = await listAll(ref)
        const urlArray = await Promise.all(result.items.map(async imgRef => ({ fileName: splitDot(imgRef.name), uri: await getDownloadURL(imgRef) })));
        return urlArray
    } catch (error) {
        console.error('Error:', error);
        throw error; //
    }
}

const loadAllImage = async (setStorageImg) => {
    const storage = getStorage(app)
    let loadImg = {}
    let proker = []

    const maggotRef = ref(storage, 'proker/maggot')
    const posyanduRef = ref(storage, 'proker/posyandu')
    const ngajarRef = ref(storage, 'proker/ngajar')
    const sosialisasiRef = ref(storage, 'proker/sosialisasi')
    const plangRef = ref(storage, 'proker/plang')

    const teamRef = ref(storage, 'team')
    const allImg = ref(storage, 'allimg')


    proker.push({ id: 0, img: toArrayRaw(await geterURI(maggotRef)) })
    proker.push({ id: 1, img: toArrayRaw(await geterURI(posyanduRef)) })
    proker.push({ id: 2, img: toArrayRaw(await geterURI(ngajarRef)) })
    proker.push({ id: 3, img: toArrayRaw(await geterURI(sosialisasiRef)) })
    proker.push({ id: 4, img: toArrayRaw(await geterURI(plangRef)) })
    loadImg[`proker`] = proker
    loadImg["team"] = await geterURI(teamRef)
    loadImg["allImg"] = toArrayRaw(await geterURI(allImg))
    setStorageImg(loadImg)
}

export default loadAllImage