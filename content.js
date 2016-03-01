var mapObj = {
  ประยุทธ์: "คนดี",
  จันทร์โอชา: "ที่สุดในจักรวาล",
  รัฐประหาร: "คืนฟาร์มสุข",
  คณะรักษาความสงบแห่งชาติ: "คณะรักษาฟาร์มสุขแห่งจักรวาล",
  คสช: "คฟจ",
  ความสงบเรียบร้อย: "ความสุข",
  นายกรัฐมนตรี: "หัวหน้าฟาร์มสุข",
  กองทัพ: "เหล่าเทวดา",
  ทหาร: "เทวดา",
  อาร์มี่: "เทวดา",
  ยึดอำนาจ: "คืนฟาร์มสุข",
  ประชาธิปไตย: "คนเช่าฟาร์มเป็นใหญ่",
  นิติบัญญัติ: "ออกกฎฟาร์มสุข",
  รัฐธรรมนูญ: "กฎฟาร์มสุข",
  ไทย: "จักรวาล",
  คนไทย: "คนเช่าฟาร์ม",
  ประชาชน: "คนเช่าฟาร์ม",
  เอกชน: "คนเช่าฟาร์ม",
  ประเทศ: "ฟาร์ม",
  ชาติ: "จักรวาล",
  รัฐ: "ฟาร์ม",
  ราชอาณาจักร: "จักรวาล",
  ชุมนุม: "บ่อนทำลาย",
  เลือกตั้ง: "บ่อนทำลาย",
  ประท้วง: "บ่อนทำลาย",
  ชินวัตร: "คนเลว",
  ทักษิณ: "คนเลว",
  เสื้อแดง: "ล้มเจ้า",
  เสื้อเหลือง: "รักเจ้า",
  ประชาธิปัตย์: "แมลงสาบ"
};

var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];
    if (node.nodeType === 3) {
      var text = node.nodeValue;

      //var replacedText = text.replace(/ประยุทธ์/gi, 'คนดี');

      var replacedText = text.replace(re, function(matched){
        return mapObj[matched];
      });
  
      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
