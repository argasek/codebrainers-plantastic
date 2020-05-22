import CategoryItem from 'components/categories/CategoryItem';
import InProgress from 'components/shared/InProgress';
import OperationFailed from 'components/shared/OperationFailed';
import React, { useEffect } from 'react';
import useCategories from 'ducks/categories/useCategories';
import { Card, CardBody, ListGroup } from 'reactstrap';

const CategoriesContainer = () => {

  const {
    categories,
    categoriesErrorMessage,
    categoriesInProgress,
    categoriesSuccess,
    fetchCategories,
  } = useCategories();

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <CardBody>
        <div className="app-container">
          <InProgress inProgress={ categoriesInProgress } />
          <OperationFailed isFailed={ categoriesSuccess === false }>
            <strong>Failed to fetch categories.</strong>
            { ' Reason: ' }
            { categoriesErrorMessage }
          </OperationFailed>
          {
            categoriesSuccess &&
            <ListGroup className="categories">
              {
                categories.map((category) =>
                  <CategoryItem
                    category={ category }
                    key={ category.id }
                  />
                )
              }
            </ListGroup>
          }
        </div>
      </CardBody>
    </Card>
  );
};

CategoriesContainer.propTypes = {};

export default CategoriesContainer;