import React , {useState , useEffect} from "react";
import db from "@/data/db.json";
import Home from "@/components/modules/Home";

export default function index() {
  const [search, setSearch] = useState('');
  const [homes, setHomes] = useState([...db.homes]);
  useEffect(() => {
    const newHomes = db.homes.filter(home => home.title.includes(search))
    setHomes(newHomes)
  }, [search]);
  return (
    <>
      <div class="home-section" id="houses">
        <div class="home-filter-search">
          <div class="home-filter">
            <select name="" id="">
              <option value="" selected>
                انتخاب کنید
              </option>
              <option value="">بر اساس قیمت</option>
              <option value="">بر اساس تعداد اتاق</option>
              <option value="">بر اساس ادرس</option>
              <option value="">بر اساس اندازه</option>
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
          <li class="pagination__item">
            <a href="#" class=""></a>
          </li>
          <li class="pagination__item">
            <a href="#" class="">
              2
            </a>
          </li>
          <li class="pagination__item active">
            <a href="#" class="">
              1
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
