class JobViewset(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = (permissions.AllowAny,)
    filter_backends = [DjangoFilterBackend]
    lookup_field = 'id'

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        # print(self.request.query_params)
        queryset = Job.objects.all()
        
        # PERFORM FILTER BY SEARCH INPUT
        conditions = Q()
        # keywords = self.request.query_params.get('organization', None)
        organizations_keywords = self.request.GET.getlist("organization", None)
        
        job_types_keywords = self.request.GET.getlist("job-types", None)
        print(job_types_keywords)
        
        if organizations_keywords:
            print("True")
            organizations_keywords_list = organizations_keywords[0].split(',')

        else:
            organizations_keywords_list = []

        if job_types_keywords:
            job_types_keywords_list = job_types_keywords[0].split(',')

        else:
            job_types_keywords_list = []
            
            
            
            
            # print(keywords_list)
            
            # print(keywords_list)
            # for word in keywords_list:
                # print (f'This word is: {word}')
            # print(Q(organization__in=keywords_list))
            conditions |= Q(organization__in=organizations_keywords_list) | Q(jobType__in=job_types_keywords_list)

            
            if conditions:
                # print(type(conditions))
                queryset = Job.objects.filter(conditions)
                print(len(queryset))

        # PERFORM FILTER BY DATE
        # JOB OBJECT DOESNT HAVE DATE

        return queryset