import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

function Sidemenu() {
    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example" className="w-full">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Anasayfa
                    </Sidebar.Item>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Roller">
                        <Sidebar.Item href="#">Öğretmen Rolleri</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiInbox} label="Blog Yönetimi">
                        <Sidebar.Item href="#">Kursların Özeti</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiUser} label="Profil">
                        <Sidebar.Item href="#">Öğretmen Profili</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Öğretmen Yönetimi">
                        <Sidebar.Item href="#">Öğretmen Ders Kabul Bölümü</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="Kurslar">
                        <Sidebar.Item href="#">Tüm Kurslar</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiArrowSmRight} label="Kurs Yönetimi">
                        <Sidebar.Item href="#">Kurs Oluştur</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiTable} label="Proje Yönetimi">
                        <Sidebar.Item href="#">Öğretmen Etkinliği</Sidebar.Item>
                    </Sidebar.Collapse>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
export default Sidemenu;