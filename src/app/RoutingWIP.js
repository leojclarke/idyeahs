 <Route
          exact
          path="/ideas/add"
          render={props => (
            <IdeaForm
              onSubmit={handleIdeaSubmit}
              username={activeUser}
              history={props.history}
            />
          )}
        />
        <Route
          exact
          path="/ideas/details/:id"
          render={props => <IdeaDetails posts={ideas} {...props} />}
        />
        <Route
          exact
          path="/feedback"
          render={() => (
            <>
              <FeedbackResultsPage
                responses={responses}
                counter={counter}
                questions={FeedbackQuestions}
              />
            </>
          )}
        />
        <Route
          exact
          path="/feedback/add"
          render={props => (
            <FeedbackForm
              questions={FeedbackQuestions}
              handleFeedbackSubmit={handleFeedbackSubmit}
              history={props.history}
            />
          )}
        /> 