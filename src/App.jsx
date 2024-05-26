import { useState } from 'react'
import './App.css'
import MiniContent from './assets/MiniContent'
import Content from './assets/Content'
import img1 from './assets/img8.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'

function App() {
    const [weather,setWeather]=useState({
        id: 1,
        name: "Weather With You",
        description: "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.",
        image: img1,
        episode: 1
    })
    
    const [onepice,setOnepice]=useState({
        id:2,
        name: 'Once Peace',
        description: "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
        image: img2,
        episode: 1018
    })
    const [boruto,setBoruto]=useState({
        id: 3,
        name: "Naruto Next Generations",
        description: "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki – “con” của Orochimaru.",
        image: img3,
        episode: 250
    })
    const [spy,setSpy]=useState({
        id: 4,
        name: "Spy X Family",
        description: "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới",
        image: img4,
        episode: 7
    })
    const [shingeki,setShingeki]=useState({
        id: 5,
        name: "Shingeki no kyojin",
        description: "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ quây tròn đồng tâm, nơi được cho là duy nhất mà nhân loại còn tồn tại. Ba bức tường được đặt tên theo tên ba người con gái của vị vua đầu tiên có tên là Maria, Rose và Sina. Người dân ở đó, được gọi là dân tộc Eldia, đã tin rằng hơn một trăm năm trước, loài người đã bị đẩy đến bờ vực tuyệt chủng sau sự xuất hiện của những người khổng lồ hình dáng con người, được gọi là Titan.",
        image: img5,
        episode: 28
    })
    const [tsubasa,setTsubasa]=useState({
        id: 6,
        name: "Captain Tsubasa",
        description: "Tsubasa Oozora là nhân vật chính trong bộ truyện này. Khi còn nhỏ, cậu đã thoát chết nhờ một quả bóng bất ngờ. Điều đó đã thúc đẩy cậu trở thành một fan hâm mộ bóng đá. Câu chuyện tập trung vào các trận đấu bóng đá hấp dẫn, đem lại những bất ngờ cho khán giả. Đây là bản làm lại của 'Tsubasa Giấc mơ sân cỏ', với những chi tiết được thêm hoặc bỏ, để cộng thêm nét đặc trưng vào bộ truyện. Bộ phim này đã làm vợi lên kí ức về tuổi thơ của biết bao người.",
        image: img6,
        episode: 28
    })
    const [ashi,setAshi]=useState({
        id: 7,
        name: "Ao Ashi",
        description: "Ashito Aoi là một cầu thủ bóng đá trẻ, đầy khát vọng đến từ một thị trấn vùng nông thôn ở Nhật Bản. Hy vọng vào được một trường trung học với một câu lạc bộ bóng đá giỏi đã tan thành mây khói khi anh gây ra một sự cố trong một trận đấu quan trọng cho đội của mình, dẫn đến việc họ bị loại khỏi giải đấu. Tuy nhiên, anh đã lọt vào mắt xanh của một người quan trọng tình cờ đến thăm từ Tokyo. Mọi chuyện sẽ diễn ra như thế nào đối với Ashito?",
        image: img7,
        episode: 28
    }) 
    
  return (
      <div className='all'>
        <div className='content'>
            <div className='road'>
        <Content name={weather.name} image={img1} episode={weather.episode} class='Episode 1' description={weather.description} >
            <div className='change'>
        <MiniContent name={onepice.name} image={img2} class='Episode 1018' episode={onepice.episode} description={onepice.description}></MiniContent>
        <MiniContent name={boruto.name} image={img3} class='Episode 250' episode={boruto.episode} description={boruto.description}></MiniContent>
        <MiniContent name={spy.name}  image={img4} class='Episode 7' episode={spy.episode} description={spy.description}></MiniContent>
        <MiniContent name={shingeki.name} image={img5} class='Episode 28' episode={shingeki.episode} description={shingeki.description}></MiniContent>
  <MiniContent name={tsubasa.name} image={img6} class='Episode 28' episode={tsubasa.episode} description={tsubasa.description}></MiniContent> 
        <MiniContent name={ashi.name}  image={img7} class='Episode 28' episode={ashi.episode} description={ashi.description}></MiniContent>
            </div>
        </Content>
            </div>
        </div>
    </div>
  )
}

export default App

{/*<div className='flex'>
 <Content image={img1} name={weather.name} class={weather.description}></Content>
 <Content image={img2} name={onepice.name} class={onepice.episode}></Content>
 <Content image={img3} name={boruto.name} class={boruto.episode}></Content>
 <Content image={img4} name={spy.name} class={spy.episode}></Content>
 <Content image={img5} name={shingeki.name} class={shingeki.episode}></Content>
 <Content image={img6} name={tsubasa.name} class={tsubasa.episode}></Content>
 <Content image={img7} name={ashi.name} class={ashi.episode}></Content>
</div>     */ }