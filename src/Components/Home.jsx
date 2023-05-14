import React,{useState} from 'react'
import axios from 'axios'
import './Style/home.css'
import Barchart from './Barchart';

export default function Home() {
    const [csv,setCsv]=useState("Word,Frequency\n");
    const [canDownload,setCanDownload]=useState(false)
    const [chartData,setChartData]=useState({
      labels:[],
      datasets:[{
        label:"",
        data:[]
      }]
    })


    //Function To Download the Csv File
    
    //Function To Count the Words And There Frequency
    const setMapData=(str,map)=>{

        console.log('called')
        let length=str.length;
        console.log(length)
        let i=0;
        let word="";
        while(i<length){
            if(str[i]===' ' || str[i]==='.' || str[i]==='\n' || str[i]==='(' || str[i]===')' || str[i]==='?'){
                if(word===''){
                    i++
                    continue
                }
                if(!map.has(word)){
                    map.set(word,0);
                }
                map.set(word,map.get(word)+1);
                word="";
            }
            else{
                word+=str[i]
            }
            i++;
        }
        if(!map.has(word)){
            map.set(word,0);
        }
        map.set(word,map.get(word)+1);
        word="";

        let map2=new Map([...map.entries()].sort((a,b)=>b[1]-a[1]))
        return map2
        
}


    const handleData=()=>{
        axios.get('https://www.terriblytinytales.com/test.txt').then((response)=>{
          let map=new Map();
          return Array.from(setMapData(response.data,map)).slice(0,20)
        }).then((response=>{
          console.log(response)
          const clabels=[];
          const cdataSets=[];
          response.forEach(data=>{
            //Setting Up the Labels and datasets
            clabels.push(data[0]);
            cdataSets.push(data[1]);

            //Setting the previou state
            setCsv(prevState=>{
              let val=data.join(',')
              val+='\n'
              return prevState+val;
            })
          })


          //Setting Up the chart.js data
          setChartData(()=>{
            const obj={
              labels:clabels,
              datasets:[{
                label:"Frequency Of Words",
                data:cdataSets
            }]
            }
            console.log(obj)
            return obj;
          })
          //Setting Up the download boolean
          setCanDownload(true)

        }))
        .catch(err=>{
          console.log(err)
        })
    }


    const handleDownload=()=>{
      if(!canDownload){
        alert('Please First Click on Get CSV File To get Data')
        return;
      }
      var hiddenElement=document.createElement('a');
      hiddenElement.href='data:text/csv;charset=utf-8,' + encodeURI(csv);
      hiddenElement.target='_blank'
      hiddenElement.download='Word Frequency Counter.csv'
      hiddenElement.click()
    }

  return (
    <div className='home'>
        <div className="homeContainer">
            <button onClick={handleData}>Submit</button>
            {canDownload?<button onClick={handleDownload}>Export</button>:""}
        </div>
        <div style={{width:'70%',marginTop:'25px'}}>
          {canDownload?<Barchart chartData={chartData}/>:""}
        </div>
    </div>
  )
}
