import pcgaming from "../../assets/PC-gaming.png"
import pcdohoa from "../../assets/PC-dohoa.png"
import pcvanphong from "../../assets/PC-vanphong.png"
import server from "../../assets/server.png"
import pcai from "../../assets/PC-AI.png"
import linhkienpc from "../../assets/linhkienpc.png"
import thietbimang from "../../assets/modem.png"
import smarthome from "../../assets/smarthome.png"
import camera from "../../assets/security-camera.png"
import soft from "../../assets/soft.png"
import printer from "../../assets/printer.png"


const PCType =[
    {
        id:1,
        name: "Văn phòng"
    },
    {
        id:2,
        name: "Đồ hoạ"
    },
    {
        id:3,
        name: "Gaming"
    },
    {
        id:4,
        name: "Server"
    },
    {
        id:5,
        name: "AI/Machine Learning"
    }
]

const CPUType =[
    {
        id:1,
        cpu: "AMD"
    },
    {
        id:2,
        cpu: "Intel"
    }
   
]

const Pricing =[
    {
        id:1,
        amout: "0 - 5.000.000 VNĐ"
    },
    {
        id:2,
        amout: "5.000.000 - 15.000.000 VNĐ "
    },
    {
        id:3,
        amout: "15.000.000 VNĐ trở lên "
    }
]

const Category =[
    {
        id:1,
        icon: "PC Gaming",
        img: pcgaming
    },
    {
        id:2,
        icon: "PC đồ hoạ",
        img: pcdohoa
    },
    {
        id:3,
        icon: "PC Văn phòng",
        img: pcvanphong
    },
    {
        id:4,
        icon: "Server",
        img: server
    },
    {
        id:5,
        icon: "AI/Machine Learning",
        img: pcai
    },
    {
        id:6,
        icon: "Linh kiện PC",
        img: linhkienpc
    },
    {
        id:7,
        icon: "Máy in",
        img: printer
    },
    {
        id:8,
        icon: "Thiết bị mạng",
        img: thietbimang
    },
    {
        id:9,
        icon: "Phần mềm",
        img: soft
    },
    {
        id:10,
        icon: "Camera an ninh",
        img: camera
    },
    {
    
        id:11,
        icon: "Smart Home",
        img: smarthome
    
    }
 
]



const MostSeached =[
    {
        id:1,
        name: "PC GamingCard đồ họa VGA MSI GeForce RTX 4060 Ti VENTUS 3X 16GB OC",
        img: "https://tinhocnhuy.vn/wp-content/uploads/2024/11/thny_87a80dd814bc3b65720de55fdd8ee56d.jpg",
        price: "14.490.000"
    },
    {
        id:2,
        name: "Camera Imou S41FP",
        img: "https://tinhocnhuy.vn/wp-content/uploads/2024/11/thny_b05d1f245bcea5f090ca3a0a60cd1762.jpg",
        price: "2.000.000"
    },
    {
        id:3,
        name: "Router DrayTek Vigor 2915ac",
        img: "https://tinhocnhuy.vn/wp-content/uploads/2024/11/thny_236386344217bd9d95bc13defd93fd37.jpg",
        price: "3.750.000"
    },
    {
        id:4,
        name: "Màn Hình Dell Ultrasharp 24 inch U2424H Full HD – IPS – 120Hz",
        img: "https://tinhocnhuy.vn/wp-content/uploads/2024/11/thny_b79107c758e31af19b1a7224a9744822.jpg",
        price: "5.950.000"
    },
    {
        id:5,
        name: "Máy in Canon MF235",
        img: "https://tinhocnhuy.vn/wp-content/uploads/2024/11/thny_133e61067cd0b4c217f46d72fc9396ad.jpg",
        price: "7.480.000"
    },
    {
        id:6,
        name: "Công tắc cửa cuốn cảm ứng thông minh Wifi ISACHI SC-W3RS",
        img: "https://tinhocnhuy.vn/wp-content/uploads/2024/11/thny_5fd6961c17fec4e531020b7e8cb241ed.jpg",
        price: "1.150.000"
    }
   
]

export default {
    PCType,
    CPUType,
    Pricing,
    Category,
    MostSeached
}