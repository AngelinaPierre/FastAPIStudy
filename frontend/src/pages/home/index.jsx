import React from 'react';
import DashBoardHeader from '../../components/DashboardHeader'
import Footer from '../../components/footer'
import RecipeTable from '../../components/RecipeTable';

const Home = () => {
    return (
        <>
        <section className="bg-black ">
             <DashBoardHeader />

             <div className="container px-5 py-12 mx-auto lg:px-20">

                  <div className="flex flex-col flex-wrap pb-6 mb-12 text-white ">
                       <h1 className="mb-6 text-3xl font-medium text-white">
                            Recipes - Better than all the REST
                       </h1>
                       {/* <!-- This is an example component --> */}
                       <div className="container flex justify-center items-center mb-6">
                            <div className="relative w-full max-w-xs m-auto">
                                 <input
                                      type="text"
                                      className={`text-teal-500 z-20 hover:text-teal-700 h-14 w-full max-w-xs m-auto pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none`} placeholder="Search recipes..." />
                                 <div className="absolute top-2 right-2">
                                      <button className="h-10 w-20 text-white rounded bg-teal-500 hover:bg-teal-600">Search</button>
                                 </div>
                            </div>
                       </div>
                       {/* <p className="text-base leading-relaxed">
       Sample recipes...</p> */}
                       <div className="mainViewport">
                            <RecipeTable />
                       </div>
                  </div>
             </div>
             <Footer />
        </section>
   </>
    )
}
export default Home;