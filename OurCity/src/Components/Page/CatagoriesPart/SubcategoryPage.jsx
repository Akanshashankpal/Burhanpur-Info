import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Atom } from 'react-loading-indicators';
import axios from '../../../../axios';
import GymEnquiryPopup from '../../Promo/gymEnquiryPopup';

const SubcategoryPage = () => {
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEnquiryPopup,setShowEnquiryPopup] = useState(false);
  // const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  
  const categoryMap ={
    '681f0c8c8adb93da7515b0a9': 'gym',
  '681f0c8c8adb93da7515b0b0': 'restaurant',
  '681f0c8c8adb93da7515b0b1': 'beauty',
  '681f0c8c8adb93da7515b0b2': 'realestate',
  }
  const mappedCategory = categoryMap[categoryId] || "gym";

  useEffect(() => {
    console.log('current Category ID :', categoryId)
    setLoading(true);
    axios.get(`/subcategory/getSubCategory/${categoryId}`)
      .then(res => {
        setSubcategories(res?.data?.result || []);
        setLoading(false);

        
         const timer = setTimeout(() => {
          setShowEnquiryPopup(true);
        }, 3000); 
        return () => clearTimeout(timer)

        
      })
      .catch(err => {
        console.error("Subcategory fetch failed", err);
        setLoading(false);
        const timer = setTimeout(() => {
          setShowEnquiryPopup(true);
        }, 3000); // 
        return () => clearTimeout(timer);
        
      });
  }, [categoryId]);


  // const handleEnquiryClick = (subcategory) => {
  //   setSelectedSubcategory(subcategory);
  //   setShowEnquiryPopup(true);
  // };

  const handleCloseEnquiryPopup = () => {
    setShowEnquiryPopup(false);
    // setSelectedSubcategory(null);
  };



  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <Atom color="#fa0606" size="medium" />
        </div>
      )}

      {!loading && (
        <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Subcategories</h2>

          {subcategories.length > 0 ? (
            <div className="space-y-6">
              {subcategories.map((sub, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  {/* 📱 Mobile: full-width image | 🖥️ Desktop: fixed size */}
                  <img
                    src={sub.image}
                    alt={sub.name}
                    className="w-full h-40 object-cover rounded-md sm:w-40 sm:h-40"
                  />

                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold">{sub.name}</h3>
                    <p className="text-gray-500 text-sm">{sub.description}</p>
                    <p className="text-gray-800 text-sm font-medium">{sub.address}</p>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-md transition">
                        📞 Call Now
                      </button>
                      <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 shadow-md transition">
                        Send Enquiry
                      </button>
                      <Link to={`/subcategory/${sub._id}`} className="w-full">
                        <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 shadow-md transition">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
              <p className="text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
              <Link
                to="/"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Go Home
              </Link>
            </div>
          )}
        </div>
      )}


 {showEnquiryPopup && (
        <GymEnquiryPopup
          category={mappedCategory}
          onClose={handleCloseEnquiryPopup}
        />
      )}
      

    </>
  );
};

export default SubcategoryPage;
