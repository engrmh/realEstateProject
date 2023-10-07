import React , {useState , useEffect} from "react";
import db from "@/data/db.json";
import Home from "@/components/modules/Home";

export default function index() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('-1')
  const [homes, setHomes] = useState([...db.homes]);
  const [page, setPage] = useState(1)
  useEffect(() => {
    const newHomes = db.homes.filter(home => home.title.includes(search))
    setHomes(newHomes)
  }, [search]);
  useEffect(() => {
    switch (sort) {
      case 'price': {
        const newHomes = [...homes].sort((a, b) => a.price - b.price)
        setHomes(newHomes)
        break
      }
      case 'room': {
        const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount)
        setHomes(newHomes)
        break
      }
      case 'meterage': {
        const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage)
        setHomes(newHomes)
        break
      }
      default: {
        setHomes([...db.homes])
      }
    }
  }, [sort]);


  const paginationHandler = (event , page) => {
    event.preventDefault()
    const endIndex = 3 * page
    const startIndex = endIndex - 3
    const paginatedHomes = db.homes.slice(startIndex,endIndex)
    setHomes(paginatedHomes)
  }
  return (
    <>
      <div class="home-section" id="houses">
        <div class="home-filter-search">
          <div class="home-filter">
            <select name="" id="" defaultValue={sort} onChange={e=>setSort(e.target.value)}>
              <option value="-1" selected>
                انتخاب کنید
              </option>
              <option value="price">بر اساس قیمت</option>
              <option value="room">بر اساس تعداد اتاق</option>
              <option value="meterage">بر اساس اندازه</option>
            </select>
          </div>
          <div class="home-search">
            <input type="text" placeholder="جستجو کنید" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>

        <div class="homes">
          {
            homes.length !== 0 ? (
              homes.slice(0,6).map((home, index) => (
                <Home key={index} {...home} />
              ))
            ) : (
              <span>خانه ای یافت نشد!</span>
            )
          }
        </div>

        <ul class="pagination__list">
          {
            Array.from({length: Math.ceil(db.homes.length / 3 )}).map((item , index) =>(
                <li className="pagination__item" key={index} onClick={event => paginationHandler(event , index + 1) }>
                  <a href="#" className="">{index + 1}</a>
                </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}
