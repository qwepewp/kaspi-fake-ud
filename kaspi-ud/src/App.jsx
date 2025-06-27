import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function IDCardApp() {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "Султанов Арман Маратұлы",
    iin: "070112500410",
    birthDate: "12.01.2007",
    docNumber: "052510343",
    issueDate: "20.01.2023",
    expiryDate: "19.01.2033",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-md mx-auto mt-10 border rounded-xl shadow-xl overflow-hidden">
      <Tabs defaultValue="document">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="document">Документ</TabsTrigger>
          <TabsTrigger value="details">Реквизиты</TabsTrigger>
        </TabsList>

        <TabsContent value="document">
          <div className="p-4 space-y-4">
            <div className="relative">
              <div className="bg-green-100 p-4 rounded-xl text-center">
                {photo ? (
                  <img
                    src={photo}
                    alt="uploaded"
                    className="mx-auto rounded-md w-28 h-28 object-cover"
                  />
                ) : (
                  <label className="flex flex-col items-center cursor-pointer">
                    <Upload className="w-6 h-6" />
                    <span className="text-sm text-gray-600 mt-2">Загрузить фото</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handlePhotoChange}
                    />
                  </label>
                )}
              </div>
            </div>

            <div className="flex justify-around">
              <Button variant="default">Предъявить документ</Button>
              <Button variant="outline">Отправить документ</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="details">
          <div className="p-4 space-y-3">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <label className="text-sm text-gray-500">
                  {key === "fullName"
                    ? "ФИО"
                    : key === "iin"
                    ? "ИИН"
                    : key === "birthDate"
                    ? "Дата рождения"
                    : key === "docNumber"
                    ? "Номер документа"
                    : key === "issueDate"
                    ? "Дата выдачи"
                    : "Срок действия"}
                </label>
                <Input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              Отправить реквизиты
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}