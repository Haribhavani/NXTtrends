import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderFilterRatingLists = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      const ratingClassName =
        rating.ratingId === activeRatingId ? 'active-rating' : 'and-up'

      return (
        <li className="item" onClick={onClickRatingItem} key={rating.ratingId}>
          <img
            src={rating.imageUrl}
            alt={`rating${rating.ratingId}`}
            className="ratingImg"
          />

          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <div className="rating-filter">
      <h1 className="head">Rating</h1>
      <ul className="rating-li">{renderFilterRatingLists()}</ul>
    </div>
  )

  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(each => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategory = () => changeCategory(each.eachId)

      const categoryClassName =
        each.eachId === activeCategoryId ? 'each-active' : 'each'

      return (
        <li className="item" onClick={onClickCategory} key={each.eachId}>
          <img
            src={each.imageUrl}
            alt={`rating${each.eachId}`}
            className="ratingImg"
          />

          <p className={categoryClassName}>{each.name}</p>
        </li>
      )
    })
  }

  const renderProductCategory = () => (
    <>
      <h1 className="heading">Category</h1>
      <ul className="li-item">{renderCategoryList()}</ul>
    </>
  )

  const onEnterInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="con">
        <input
          value={searchInput}
          type="search"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterInput}
        />
        <BsSearch className="image" />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategory()}
      {renderRatingFilters()}
      <button type="button" className="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
