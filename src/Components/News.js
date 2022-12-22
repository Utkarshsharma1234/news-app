import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import myImg from './pasta.webp'

export class News extends Component {

    static defaultProps = {
        country : "us",
        pageSize : 8,
        category : "general"
    }
  
      static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
      }

       capitalizeFirstLetter =(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  constructor(props){
      super(props)
      console.log("aur kya haal chaal h")
      this.state = {
        articles: [],
        loading : false,
        page: 1
      }

      document.title = `Daily News - ${this.capitalizeFirstLetter(this.props.category)}`
  }
  // async updateNews(){
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey} &page=${this.state.page}&pageSize=${this.props.pageSize}`
  //   let data = await fetch(url)
  //   this.setState({loading:true})
  //   let parsedData = await data.json()
  //   console.log(parsedData)
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults : parsedData.totalResults,
  //     loading:false
  //     })
  // }
  async componentDidMount(){
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey} &page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    this.setState({loading:true})
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults : parsedData.totalResults,
      loading:false
      })
      this.props.setProgress(100)
   }

  handlePrevClick = async ()=>{
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey} &page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    let data =  await fetch(url)
    this.setState({loading:true})
    let parsedData =  await data.json()
    console.log(parsedData)
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading : false
    })
    this.props.setProgress(100)
  }

  handleNextClick = async ()=>{
    console.log()
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)))
    {
      this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey} &page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data =  await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      page : this.state.page + 1,
      articles : parsedData.articles,
      loading :false
    })
    this.props.setProgress(100)
    }
  }
   
  render() {
    
    return (
      
      <div className='container my-4'>
        <h1 className='text-center' style={{color: 'blue', margin: "35px 0px", marginTop: "90px", textDecoration: 'underline'}}>Daily News 24 X 7 - Hot Headlines🗞️ from {this.capitalizeFirstLetter(this.props.category)}</h1>
        { this.state.loading && <Spinner/>}
        
        <div className="row">
          
        {!this.state.loading && this.state.articles.map((element)=>{

            return <div className="col-md-4">
            <NewsItem title={element.title?element.title.slice(0,45):'...'} description={element.description?element.description.slice(0,71):'...'} imageUrl = {element.urlToImage?element.urlToImage:myImg} newsUrl={element.url}
            author = {element.author?element.author:'...'} date = {element.publishedAt?element.publishedAt:'...'} source={element.source.name}/>
            </div>
        })}


        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} class="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} class="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button></div>
      </div>
    )
  }
}

export default News
