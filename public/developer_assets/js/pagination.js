
        function paginate(id, no, url, tableId, type, docId, dateFrom, dateTo, rating, city, moduleName, vendortype, statusFilter, zone) {
            var urlAdditionalParams = "";
            if (docId != undefined && docId && docId != "") {
                urlAdditionalParams += "/" + docId;
            }
            if (dateFrom != undefined && dateFrom && dateFrom != "") {
                urlAdditionalParams += "/" + dateFrom;
            }
            if (dateTo != undefined && dateTo && dateTo != "") {
                urlAdditionalParams += "/" + dateTo;
            }
            if (rating != undefined && rating && rating != "") {
                urlAdditionalParams += "/" + rating;
            }
            if (city != undefined && city && city != "") {
                urlAdditionalParams += "/" + city;
            }
            if (moduleName != undefined && moduleName && moduleName != "") {
                urlAdditionalParams += "/" + moduleName;
            }
            if (vendortype != undefined && vendortype && vendortype != "") {
                urlAdditionalParams += "/" + vendortype;
            }
            if (statusFilter != undefined && statusFilter && statusFilter != "") {
                urlAdditionalParams += "/" + statusFilter;
            }
            if (zone != undefined && zone && zone != "") {
                urlAdditionalParams += "/" + zone;
            }
            $.ajax({
                url: '/' + url + '/' + id + '/' + no + '/' + type + urlAdditionalParams,
                type: 'GET',
                async: false,
                success: function(response) {
                    $('' + tableId + '').html(response);
                    $('.spinner-loader').hide();
                }
            });
        }