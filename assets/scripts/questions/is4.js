const questionsData = [
    {
        "question": "Nowadays, the usage of classical feature extraction and data analysis methods is outdated since the capability of the recent deep learning models and methods made them obsolete and not more present in the common practice",
        "otherAnswers": [
            "True"
        ],
        "correctAnswer": "False"
    },
    {
        "question": "Artificial Intelligence can be applied to the following sectors",
        "otherAnswers": [
            "Robotics",
            "Information Extraction"
        ],
        "correctAnswer": "All the above"
    },
    {
        "question": "Artificial neural networks are capable to learn human biases",
        "otherAnswers": [
            "False: the achievable complexity of the artificial neural networks is so far from the complexity of the human brain to make impossible to mimic this characteristic",
            "False: human biases are not reproducible nor measurable"
        ],
        "correctAnswer": "True"
    },
    {
        "question": "Recent artificial intelligence models can solve analogy puzzles",
        "otherAnswers": [
            "False"
        ],
        "correctAnswer": "True"
    },
    {
        "question": "Considering the “Data knowledge spectrum plot” discussed in class, the minimum amount of data required is in the following case.",
        "otherAnswers": [
            "No knowledge about the model generating the data is available",
            "A statistical model of the process is available"
        ],
        "correctAnswer": "A mathematical model of the process is available"
    },
    {
        "question": "It is possible to think to the single datum in input to the neural network as a point in the “input space” of the model, even if the input is a single value, a N dimensional vector, or an image",
        "otherAnswers": [
            "False"
        ],
        "correctAnswer": "True"
    },
    {
        "question": "It is correct to say the one of the key features of an intelligent artificial system is the capability to learn (even if only a limited sense) and/or get better in time",
        "otherAnswers": [
            "False"
        ],
        "correctAnswer": "True"
    },
    {
        "question": "According to the Andries Engelbrecht definition of Computational intelligence what of the following is not included?",
        "otherAnswers": [
            "Artificial Neural Networks",
            "Evolutionary Computing",
            "Swarm Intelligence",
            "Artificial immune system",
            "Fuzzy Systems"
        ],
        "correctAnswer": "All the above are included"
    },
    {
        "question": "According to the class discussion of the Gestalt capability, what of the following sentences is more correct?",
        "otherAnswers": [
            "The Gestalt capability is a typical feature present by-design in the model of classical neural networks",
            "The Gestalt capability is a typical feature present by-design in the model of deep learning neural networks"
        ],
        "correctAnswer": "The Gestalt capability is a typical human feature not well (yet) mimicked in current artificial networks"
    },
    {
        "question": "The following activity: Data Selection, Data Filtering, Data Enhancing",
        "otherAnswers": [
            "Are part of the job of the artificial intelligent specialist in normal activities",
            "Contribute to keep lower the complexity of the learning task",
            "Are part of the classical machine learning approaches and they are (correctly)"
        ],
        "correctAnswer": "All the above"
    },
    {
        "question": "The Mean Squared Error is typically present in what step of the design",
        "otherAnswers": [
            "Representation"
        ],
        "correctAnswer": "Evaluation"
    },
    {
        "question": "Considering IoT devices as source of data for external intelligent systems (IS is not intended to be embedded into the IoT device), what kind of IoT devices can be really used?",
        "otherAnswers": [
            "Passive data IoT devices",
            "Active data IoT devices",
            "Dynamic data IoT devices",
            "None of the above"
        ],
        "correctAnswer": "All of the above"
    },
    {
        "question": "Referring to the class discussion, the (correct) design practice for neural networks considers",
        "otherAnswers": [
            "Start with deep learning models since they are the cutting edge and most advanced technology that we have now",
            "Start with deep learning models since they are the cutting edge and most advanced technology we have now, and then use classicals method as reference"
        ],
        "correctAnswer": "Start with simple neural networks before to consider deep learning models"
    },
    {
        "question": "The missing values can also be occupied by computing mean, mode or median of the observed given values.",
        "otherAnswers": [
            "This is very unusual and not common in practice",
            "This is not possible, since that is just descriptive statistics about the features, and cannot be used to fill missing data"
        ],
        "correctAnswer": "This is a very simple and effective solution in case the learning method is not capable to deal with missing data"
    },
    {
        "question": "Referring to the class discussion on data leakage what is the worst situation?",
        "otherAnswers": [
            "The unwanted leakage of data from training dataset to test data set",
            "None of the above since transferring data from test and/or training dataset is normal when the accuracy of the model is tested"
        ],
        "correctAnswer": "The unwanted leakage of data from test dataset to training data set"
    },
    {
        "question": "An additional information can allow the model to learn or know something that it otherwise would not know and in turn invalidate the estimated performance of the model being constructed. This is called",
        "otherAnswers": [
            "Data pre-processing",
            "Data harmonization",
            "Data wrangling"
        ],
        "correctAnswer": "Data leakage"
    },
    {
        "question": "The degrees of freedom for a given problem are the number of independent problem variables which must be specified to uniquely determine a solution. Hence the #DoF is important to be considered",
        "otherAnswers": [
            "To design the number of vectors in the learning dataset.",
            "To avoid overfitting problem in the model",
            "None of the above"
        ],
        "correctAnswer": "All the above"
    },
    {
        "question": "About the cosine metrics it is possible to say that",
        "otherAnswers": [
            "Two vectors with the same orientation have a cosine similarity of 1",
            "Two vectors oriented at 90° relative to each other have a similarity of 0",
            "None of the above"
        ],
        "correctAnswer": "All of the above"
    },
    {
        "question": "What similarity feature/features discussed in class offers/offer the property to allow a fast comparison based on a short 1D vector of elements or bits",
        "otherAnswers": [
            "phash",
            "ahash",
            "Cross-correlation"
        ],
        "correctAnswer": "All the above"
    },
    {
        "question": "In agreement to the class discussion, which description better describes the design activity?",
        "otherAnswers": [
            "Similarity in the dataset requires more space and processing time",
            "Similarity in the dataset can improve generalization",
            "None of the above"
        ],
        "correctAnswer": "Both of the above"
    },
    {
        "question": "In agreement to the class discussion, in a dataset of 1100 labelled images, the search for duplications is typically achieved...",
        "otherAnswers": [
            "by manual exploration of the dataset for better results since the number of images is not critical"
        ],
        "correctAnswer": "by automatic iterations"
    },
    {
        "question": "In agreement to the class discussion, what kind of labelling error is generally the worst case for the accuracy of the generalization of the model? ERR1 = Duplications with same labels EER2 = Duplications with different labels",
        "otherAnswers": [
            "ERR1",
            "ERR1 = EER2"
        ],
        "correctAnswer": "ERR2"
    },
    {
        "question": "According to the class discussion, about the relationship between the operation of cross-correlation and convolution it is possible to say that",
        "otherAnswers": [
            "Despite the mathematical expression is similar, the meaning and their use is completely different",
            "There is no specific relationship since they are different in meaning and mathematical expressions"
        ],
        "correctAnswer": "They are very similar in meaning and mathematical expression"
    },
    {
        "question": "According to the class discussion, what is the characteristic of the self-correlation (O = xcor2(A,A)) map produced by a generic image?",
        "otherAnswers": [
            "A flat and noisy central plateau",
            "It is not possible to create an autocorrelation map from one single images, two different images are needed"
        ],
        "correctAnswer": "An evident spike at the center with a very well-defined maximum"
    },
    {
        "question": "If your data set contains extreme outliers, it better to use as preprocessing",
        "otherAnswers": [
            "Min-max normalization",
            "Z’ norm"
        ],
        "correctAnswer": "Feature clipping"
    },
    {
        "question": "A logarithmic scaling to one feature values is typically applied in a case of",
        "otherAnswers": [
            "Outliers’ presence",
            "Negative values"
        ],
        "correctAnswer": "A very large range in the values (>0)"
    },
    {
        "question": "According to the scientific visualization rules presented in class, if you are plotting many figures of merit obtained by your trained neural network on a new dataset,  which is the correct ranking of visual attributes to be used? Left: low accuracy Right: HIGH ACCURACY",
        "otherAnswers": [
            "Color intensity > Hue > Length",
            "Area > Length > Hue",
            "Slope > Angle > Volume"
        ],
        "correctAnswer": "Hue > Area > Length"
    },
    {
        "question": "According to the scientific visualization rules presented in class, is it possible to plot a graphical representation of the confidence level of your figures of merit of your trained model?",
        "otherAnswers": [
            "No, it is a statistical index with different units and meaning and hence cannot be represented in the same plot"
        ],
        "correctAnswer": "Yes, the confidence interval data have the same units and meaning, and they can be represented in the same plot"
    },
    {
        "question": "According to the discussion presented in class about the data visualization, and considering the following steps of the design workflow 1) Get Data, 2) Clean Manipulate Data, 3) Train models, 4) Test Data, 5) Improve the design, which are the main step/steps where data visualization should be involved?",
        "otherAnswers": [
            "#1",
            "#5",
            "#1 and #5"
        ],
        "correctAnswer": "#2, #3 and #5"
    },
    {
        "question": "According to the discussion presented in class about the similarity, consider an image A(x, y) with internal similarity (repetitions of patterns). What happens to the output of the self-cross correlation (O = xcorr2(2, 2))",
        "otherAnswers": [
            "It is not possible to apply the cross correlation to the same image",
            "Output O tends to be a flat plateau with one clear central peak",
            "Output O tends to have many equivalent peaks with the same maximum value"
        ],
        "correctAnswer": "Output O tends to have many peaks and one evident maximum"
    },
    {
        "question": "The design of intelligent systems for Industry 4.0 applications should be compliant to the following main design principles.",
        "otherAnswers": [
            "Interoperability, Information transparency, Improved technical assistance",
            "Interoperability, Information transparency, Improved technical assistance, Wireless connectivity",
            "Interoperability, Information transparency, Decentralized decisions"
        ],
        "correctAnswer": "Interoperability, Information transparency, Improved technical assistance, Decentralized decisions"
    },
    {
        "question": "Machine Learning on CPUs offer the following advantages",
        "otherAnswers": [
            "Ease of portability and use-case flexibility, Market availability at different performance and prices",
            "Ease of portability and use-case flexibility, Deployment across a wide spectrum of devices",
            "Market availability at different performance and prices, Deployment across a wide spectrum of devices"
        ],
        "correctAnswer": "Ease of portability and use-case flexibility, Market availability at different performance and prices, Deployment across a wide spectrum of devices"
    },
    {
        "question": "The GoogLeNet deep learning pretrained model discussed during the course is model for",
        "otherAnswers": [
            "Post processing",
            "None of the other options",
            "Image Enhancing",
            "Segmentation"
        ],
        "correctAnswer": "Image classification"
    },
    {
        "question": "According to the class discussion, text prefiltering is often used as input for a neural network to deal with a large text input making the networks able to classifiy the input",
        "otherAnswers": [
            "True, using the hamming distance as prefilering",
            "True, using the cosine distance as prefilering",
            "True, using the string approximate match distance as prefilering",
            "True, using the discrete gradient descent as prefilering"
        ],
        "correctAnswer": "True, using the so-called “word embeddings” technique"
    },
    {
        "question": "The Inception-v3 deep learning pretrained model discussed during the course is a model for",
        "otherAnswers": [
            "Post processing",
            "None of the other options",
            "Image Enhancing",
            "Segmentation"
        ],
        "correctAnswer": "Image classification"
    },
    {
        "question": "Intelligent vision systems can achieve Semantic segmentation by",
        "otherAnswers": [
            "A hybrid approach by blob detection to select candidate ROIs and then image classification of the ROIs",
            "A hybrid approach by blob detection to select candidate ROIs and then image segmentation of the ROIs",
            "None of the other options"
        ],
        "correctAnswer": "A complete fully convolutional solution"
    },
    {
        "question": "An AI model is processing an input RGB image to evaluate the age expressed in years of the face present in the image. What kind of model is it?",
        "otherAnswers": [
            "Classifier Model",
            "Clustering Model",
            "Reinforced Learning Model",
            "None of the above"
        ],
        "correctAnswer": "Regressor Model"
    },
    {
        "question": "Acoording to class discussion, the theory of intelligent systems should include the following designing steps:",
        "otherAnswers": [
            "Representation",
            "Representation, Evaluation",
            "None of the other option"
        ],
        "correctAnswer": "Representation, Evauation, Optimization"
    },
    {
        "question": "Clustering always requires supervised dataset",
        "otherAnswers": [
            "Yes"
        ],
        "correctAnswer": "No"
    },
    {
        "question": "Acoording to class discussion, using a black box solution is:",
        "otherAnswers": [
            "Bad practice for a ML designer",
            "Since all state of the art models tend to be quite large and un-explainable, it is current good practice to adopt black box approach since you get the best models"
        ],
        "correctAnswer": "Can be used under specific circumstances"
    },
    {
        "question": "You have a dataset X of 1000 samples and number of features F = 4 features. You want to reduce the number of features F to 2 for data visualization. According to the goal, consider the following options. \n OPTION A: Apply PCA to X and select only the first 2 Principal Components. \n OPTION B: Apply the Feedforward Feature Selection to X and select only the first 2 more relevant features.",
        "otherAnswers": [
            "Option A is NOT possible. Option B is NOT possible",
            "Option A is NOT possible. Option B is possible",
            "Option A is possible. Option B is NOT possible."
        ],
        "correctAnswer": "Option A is possible. Option B is possible."
    },
    {
        "question": "You have a feature in your dataset with the following values F1 = [-5, 0, +5], which normalization will give you the following F1_norm = [0, 0.5, 1",
        "otherAnswers": [
            "Z-score",
            "Clipping",
            "A different type of normalization"
        ],
        "correctAnswer": "Min-MAX"
    },
    {
        "question": "According to the class discussion, in general for a given small dataset X, if you train a feed-forward neural models (of the same type) with an increasing number of neurons, which case is more probable?",
        "otherAnswers": [
            "The training error and the validation will decrease indefinitely",
            "The training error will increase",
            "The validation error will decrease indefinitely"
        ],
        "correctAnswer": "None of the below"
    },
    {
        "question": "According to the class discussion, in a cross-validation single test, which train/test partition of the samples will provide the lower training error but the lower confidence in the test results?",
        "otherAnswers": [
            "Training set = 75%, Test Set = 25%",
            "Training set = 50%, Test Set = 50%",
            "Training set = 25%, Test Set = 75%",
            "Training set = 01%, Test Set = 99%"
        ],
        "correctAnswer": "Training set = 99%, Test Set = 01%"
    },
    {
        "question": "According to the class discussion, what kind of activity can be performed on the test set?",
        "otherAnswers": [
            "Mean test error estimation",
            "Mean test error estimation and standard deviation",
            "Confusion matrix test"
        ],
        "correctAnswer": "All the below"
    },
    {
        "question": "According to the class discussion, what kind of activity can be performed on the train set?",
        "otherAnswers": [
            "Design of the #of neurons",
            "Design of the #of layers",
            "Normalization",
            "PCA"
        ],
        "correctAnswer": "All the other options"
    },
    {
        "question": "According to the class discussion, where can be performed the feature engineering?",
        "otherAnswers": [
            "Only on the test set",
            "On the train set and the test set",
            "Not on the train, not on the test set, but only on a different dataset"
        ],
        "correctAnswer": "Only on the train set"
    },
    {
        "question": "A simple k-Fold Cross Validation procedure may",
        "otherAnswers": [
            "Making impossible to process the test error",
            "Get stuck into one the local minima",
            "Produce severe overfitting",
            "None of the other answers"
        ],
        "correctAnswer": "Lead to disarranging the proportion of examples from each class in the test partitions"
    },
    {
        "question": "Which option is correct?",
        "otherAnswers": [
            "From the confusion matrix is possible to process the classification error and vice versa",
            "The confusion matrix is applicable only to binary classification systems",
            "The classification error is equal to the sum of the diagonal elements of the confusion matrix"
        ],
        "correctAnswer": "From the confusion matrix is possible to process the classification error"
    },
    {
        "question": "According to the notation used in class, which kind of a model is described by the equation f(x) = sgn(w ∙ x + b)",
        "otherAnswers": [
            "Liner regressor",
            "Soft-max neuron",
            "Sigmoidal neuron",
            "Gradient descent formula",
            "Number of the model’s parameters"
        ],
        "correctAnswer": "Liner classifier"
    },
    {
        "question": "According to the notation used in class, which kind of a classifier is better described by the following definition: “the output is the label produced by the most probable classifier”",
        "otherAnswers": [
            "Supervised Classifier",
            "K-means",
            "None of the other options"
        ],
        "correctAnswer": "Bayes Optimal Classifier"
    },
    {
        "question": "According to the class discussion the kNN classifier, what kind of learning is it?",
        "otherAnswers": [
            "Eager Learning",
            "Hard-limited Learning",
            "Unsupervised Clustering",
            "None of the other options"
        ],
        "correctAnswer": "Instance-based Learning"
    },
    {
        "question": "According to the class discussion, what is the classifier with the following properties: not based on neural techniques; it’s deterministic with no random initialization; perfect repeatability; a minimum number of parameters is needed; learning is very simple but effective; perfect explain ability",
        "otherAnswers": [
            "Linear classifier",
            "Decision Tree",
            "K-means",
            "None of the other options"
        ],
        "correctAnswer": "kNN"
    },
    {
        "question": "According to the class discussion on kNN classifiers about the k parameter and its relationship to regularization of the decision boundaries and the computational complexity, what is the correct option about larger values of k?",
        "otherAnswers": [
            "Less regularization and more complexity",
            "Less regularization and less complexity",
            "More regularization and less complexity",
            "The parameter k is not related to regularization and complexity"
        ],
        "correctAnswer": "More regularization and more complexity"
    },
    {
        "question": "According to the class discussion on PCA what is the correct option?",
        "otherAnswers": [
            "PCA vectors are originating from the center of mass of the points",
            "All subsequent principal component vectors are orthogonal"
        ],
        "correctAnswer": "All the other options"
    },
    {
        "question": "According to the class discussion on PCA what is the correct option?",
        "otherAnswers": [
            "All subsequent principal component vectors are orthogonal",
            "The variance of the data projection on the first PCA vectors is maximized"
        ],
        "correctAnswer": "All the other options"
    },
    {
        "question": "According to the class discussion about unsupervised learning, what is the method with the following properties: you need to specify the number of clusters k in advance, is unable to handle noisy data and outliers, it is not suitable to discover clusters with non-convex shapes",
        "otherAnswers": [
            "kNN",
            "Decision tree",
            "None of the other options"
        ],
        "correctAnswer": "K-means"
    },
    {
        "question": "According to the class discussion, considering the equation of the backpropagation in a feedforward neural network of weight w_ij connected to the following output neuron k, which is the missing term? DELTAW_ij = ? ∗ y_j ∗ delta_k",
        "otherAnswers": [
            "??? = x_j (the input vector)",
            "??? = alfa (the regularization term > 1)",
            "??? = x_j (the input vector error)"
        ],
        "correctAnswer": "??? = alfa (the regularization term < 1)"
    },
    {
        "question": "According to the class discussion, considering a general CNN architecture, what is the sequence of modules which is more likely",
        "otherAnswers": [
            "Input layer → Relu → Convolution → Max Pooling → Softmax → Output layer",
            "Input layer → Relu → Max Pooling → Softmax → Convolution → Output layer ahash",
            "Input layer → Relu → Max Pooling → Convolution → Softmax → Output layer"
        ],
        "correctAnswer": "Input layer → Convolution → Relu → Max Pooling → Softmax → Output layer"
    },
    {
        "question": "According to the class discussion, considering a standard intelligent vision system, which capability can be processed onboard on a recent smart industrial camera?",
        "otherAnswers": [
            "Segmentation",
            "Segmentation, Measurement",
            "Segmentation, Measurement, Classification with trained non-deep models",
            "Segmentation, Measurement, Classification with trained deep models and training of deep models"
        ],
        "correctAnswer": "Segmentation, Measurement, Classification with trained deep models"
    },
    {
        "question": "According to the class discussion, Traditional Segmentation methods are quite useful to produce blobs or object candidates to be further processed by deep models for classification or measurements. Traditional Segmentation methods can be partitioned in",
        "otherAnswers": [
            "Global knowledge, Edge-based",
            "Edge-based, Region-based",
            "None of the other options"
        ],
        "correctAnswer": "Global knowledge, Edge-based, Region-based"
    },
    {
        "question": "According to the class discussion referred to edge computing, is it possible to process images with trained deep learning models on external small, dedicated devices connect via USB connection?",
        "otherAnswers": [
            "False: the USB bandwidth make this option not possible",
            "False: the needed computational complexity needed to run trained deep learning models make this option not possible",
            "False: the bandwidth and the computational complexity need to process images with trained deep learning model is not adequate"
        ],
        "correctAnswer": "True: the usage of dedicated processors and the USB bandwidth make this option possible"
    },
    {
        "question": "According to the class discussion what is Greedy Layer-Wise Training?",
        "otherAnswers": [
            "A supervised training step to improve auto-encoders",
            "A supervised training step to classical feedforward networks",
            "An unsupervised training step to classical feedforward networks"
        ],
        "correctAnswer": "An unsupervised training step to improve auto-encoders"
    },
    {
        "question": "According to the scientific visualization rules presented in class, is it possible to plot a graphical representation of the confidence level of one single figure of merit (like the accuracy) of your trained model?",
        "otherAnswers": [
            "No, it is a statistical index with different units and meaning and hence cannot be represented in the same plot"
        ],
        "correctAnswer": "Yes, the confidence interval data have different units and meaning but they can be represented in the same plot using different visual attributes like \"slope\" and \"area\""
    },
    {
        "question": "The number of parameters to be fixed during a complete training in a deep learning model like the VGGNet presented in the course is about",
        "otherAnswers": [
            "< 100000",
            "about 1 Million",
            "about 10 Million"
        ],
        "correctAnswer": "> 100 Million"
    },
    {
        "question": "Considering the class discussing about the basic metrics in data similarity, given a vector A, vector B, a real number alpha, and the cosine metrics cos(A,B) it is possible to say that",
        "otherAnswers": [
            "alpha * cos(A,B) = cos(alpha*A, B)",
            "cos(A,B) = cos(alpha*A, B) = cos(A, alpha*B)",
            "alpha * cos(A,B) = cos(alpha*A, alpha*B)"
        ],
        "correctAnswer": "cos(A,B) = cos(alpha*A, alpha*B)"
    },
    {
        "question": "Referring to the class discussion on data leakage what is the worst situation?",
        "otherAnswers": [
            "The unwanted leakage of data from training dataset to test data set",
            "None of the other options since transferring data from test and/or training dataset is normal when the accuracy of the model is tested",
            "The unwanted leakage of data from test dataset to training data set since you are subtracting data to the generalization test, making the situation more pessimistic"
        ],
        "correctAnswer": "The unwanted leakage of data from test dataset to training data set since you are subtracting data to the generalization test, making the situation more optimistic"
    },
    {
        "question": "What task of an intelligent vision system is associated to following description: split or separate an image into regions using features, patterns and colors to facilitate recognition, understanding, and Region Of Interests (ROI) processing and measurements.",
        "otherAnswers": [
            "Model training",
            "Post processing",
            "Enhancing",
            "Feature engineering"
        ],
        "correctAnswer": "Segmentation"
    },
    {
        "question": "In agreement to the class discussion, what kind of labelling error is generally the worst case for the accuracy of the generalization of the model? ERR1 = Duplications with same labels, EER2 = Duplications with different labels",
        "otherAnswers": [
            "ERR1 is equalt to EER2 by definition",
            "ERR1 is the worst case",
            "ERR1 is roughly equalt to EER2 in general"
        ],
        "correctAnswer": "ERR2 is the worst case"
    },
    {
        "question": "According to the class discussion, the convolution/correlation operations are of foundamental relevance for many deep learning models. What is the characteristic of the autocorrelation map produced by a generic image?",
        "otherAnswers": [
            "It is not possible to create an autocorrelation map from one single images, two different images are needed",
            "None of the other options",
            "A flat and noisy central plateau"
        ],
        "correctAnswer": "An evident spike at the center with a very well defined maximum"
    },
    {
        "question": "A tensor processing unit (TPU) is",
        "otherAnswers": [
            "A part of a model of the Convolutional Neural Network used to process dedicated tensorial activation functions in the neurons",
            "An internal unit of the Arm processor architecture introduced to support 8-bit fixed-point matrix multiplication for deep learning models",
            "None of the other options"
        ],
        "correctAnswer": "An AI accelerator application-specific integrated circuit (ASIC) and the related board developed specifically for neural network machine learning"
    },
    {
        "question": "You have a feature in your dataset with the following values F2 = [ -13 0 1 2 4 128 ], which normalization will give you the following F2_norm = [0 0 1 2 4 10 ]",
        "otherAnswers": [
            "Z-score",
            "Min-MAX",
            "A different type of normalization"
        ],
        "correctAnswer": "Clipping"
    },
    {
        "question": "Considering the possible Intelligent Vision tasks which is the correct option?",
        "otherAnswers": [
            "Instance Segmentation is less complex than Object Detection",
            "Instance Segmentation and Object Detection have a similar complexity",
            "The other otpions are not Intelligent Vision tasks"
        ],
        "correctAnswer": "Instance Segmentation is more complex than Object Detection"
    },
    {
        "question": "In a given picture ImmA you see 1 car and 5 people in a city background. Considering the Intelligent systems IS processing the image ImmA and producing in output the label “humans”, what Intelligent Vision task is performing?",
        "otherAnswers": [
            "Instance segmentation",
            "Object detection",
            "Semantic segmentation"
        ],
        "correctAnswer": "Image classification"
    },
    {
        "question": "According to the class discussion, considering the training of deep learning models on standard CPUs and standard commercial GPUs boards, what is the gain in training performance (time) and efficiency (energy) for a medium/large-size project?",
        "otherAnswers": [
            "About 100x in performance and 10x in efficiency",
            "More than 100x in performance and more than 5x in efficiency",
            "About 2x in performance and 2x in efficiency"
        ],
        "correctAnswer": "About 10x in performance and 5x in efficiency"
    },
    {
        "question": "A basic industrial setup for Intelligent vision systems is typically composed by the following elements",
        "otherAnswers": [
            "Standard industrial smart camera with optics, external processing HW and SW units, illumination system",
            "Standard industrial camera with optics, illumination system",
            "Just a standard industrial camera with optics",
            "Standard industrial camera with optics, processing HW and SW units"
        ],
        "correctAnswer": "Standard industrial camera with optics, processing HW and SW units, illumination system"
    },
    {
        "question": "Acoording to class discussion, the classification item and thei decision boundaries, it is possible in general to optimize during the training/optimization step",
        "otherAnswers": [
            "The accuracy",
            "The margin"
        ],
        "correctAnswer": "Both"
    },
    {
        "question": "Acoording to class discussion about AI regulation in EU, regulation approach is based on:",
        "otherAnswers": [
            "List of use cases",
            "Risk assessment of the application",
            "None of the above"
        ],
        "correctAnswer": "Both"
    },
    {
        "question": "Acoording to the discussion presented in class, the EU regulatory framework for AI is:",
        "otherAnswers": [
            "Mainly focused on public services",
            "Mainly focused on health-related applications",
            "Mainly focused on data privacy"
        ],
        "correctAnswer": "None of the other options"
    }
]