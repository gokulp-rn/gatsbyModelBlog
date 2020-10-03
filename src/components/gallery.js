import React, { useState } from "react"
import Img from "gatsby-image"

const Gallery = ({ imgUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(null)

  const openModal = (e, index) => {
    setCurrentIndex(index)
  }

  const closeModal = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }

    setCurrentIndex(null)
  }

  const findPrev = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }

    setCurrentIndex(currentIndex - 1)
  }

  const findNext = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }

    setCurrentIndex(currentIndex + 1)
  }

  const renderImageContent = (data, index) => {
    return (
      <div key={data?.node?.image?.id} class="col-6 col-md-4 col-lg-3 pt-3 custom-img" onClick={(e) => openModal(e, index)}>
        <Img className="w-100" fluid={data?.node?.image?.fluid} />
      </div>
    )
  }

  return (
    <>
      <div class="row">
        {imgUrls.map(renderImageContent)}
      </div>
      <GalleryModal
        closeModal={closeModal}
        findPrev={findPrev}
        findNext={findNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex + 1 < imgUrls.length}
        data={imgUrls[currentIndex]}
      />
    </>
  )
}

const GalleryModal = ({ closeModal, hasNext, hasPrev, findNext, findPrev, data }) => {
  if (!data?.node?.image?.fluid) {
    return null;
  }

  return (
    <div>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-custom">
        <div className='modal-body'>
          <Img fluid={data?.node?.image?.fluid} />
          <a href="#" className='modal-close' onClick={closeModal}>&times;</a>
          {hasPrev && <a href="#" className='modal-prev' onClick={findPrev}>&lsaquo;</a>}
          {hasNext && <a href="#" className='modal-next' onClick={findNext}>&rsaquo;</a>}
        </div>
      </div>
    </div>
  )
}

export default Gallery