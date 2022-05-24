import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
import MainLayout  from './components/layouts/MainLayout';
import DocumentTile from 'react-document-title'


function App() {
  const [state, setState] = useState([{
    txn_date:"",
    new_case:"",
    total_case:"",
    new_case_excludeabroad:"",
    total_case_excludeabroad:"",
    new_death:"",
    total_death:"",
    new_recovered:"",
    total_recovered:"",
    update_date:""
  }])

  // const {txn_date, new_case, total_case, new_case_excludeabroad, total_case_excludeabroad, new_death, total_death, new_recovered, total_recovered, update_date} = state

  const fetchData =()=>{
    axios
    .get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
    .then(response=>{
      setState(response.data)
    })   
    .catch(err=>console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  //ฟังก์ชันการใส่ comma คั่นตัวเลข
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
  
  return (
    <MainLayout>
      <DocumentTile title="Covid-19 Thailand Today"/>
      <div className="container">
        <h1 className="pt-3 pb-3 text-center">รายการผู้ป่วย covid-19</h1>
        {state.map((cases, index)=>(
          <div className="row" key={index}>
            
            <div className="col-lg-6">
              <div className="card" >
                <div className="card-body">
                  <p>รายงานประจำวันที่ : {cases.txn_date} </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <p>ผู้ติดเชื้อรายใหม่ : {formatNumber(cases.new_case)} คน</p>
                </div>  
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <p>ผู้ติดเชื้อสะสม : {formatNumber(cases.total_case)} คน</p>
                </div>  
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <p>ผู้ติดเชื้อรายใหม่ภายในประเทศ : {formatNumber(cases.new_case_excludeabroad)} คน</p>
                </div>  
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <p>ผู้ติดเชื้อภายในประเทศสะสม : {formatNumber(cases.new_case_excludeabroad)} คน</p>
                </div>  
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <p>ผู้เสียชีวิต : {formatNumber(cases.new_death)} คน</p>
                </div>  
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <p>ผู้เสียชีวิตสะสม : {formatNumber(cases.total_death)} คน</p>
                </div>  
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <p>รักษาหาย : {formatNumber(cases.new_recovered)} คน</p>
                </div>  
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <p>รักษาหายสะสม : {formatNumber(cases.total_recovered)} คน</p>
                </div>  
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <p>อัปเดท : {cases.update_date}</p>
                </div>  
              </div>
            </div>

          </div>
        ))}              
      </div>
    </MainLayout>  
  );
}

export default App;
